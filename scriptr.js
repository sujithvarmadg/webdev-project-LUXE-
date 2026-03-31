// Product Data
const products = [
    {
        id: 1,
        name: "Italian Leather Jacket",
        category: "Outerwear",
        price: 3499,
        originalPrice: 4499,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
        badge: "New Arrival",
        rating: 5
    },
    {
        id: 2,
        name: "Aviator Sunglasses",
        category: "Accessories",
        price: 1899,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
        rating: 5
    },
    {
        id: 3,
        name: "Silk Evening Gown",
        category: "Women's",
        price: 2799,
        originalPrice: 3599,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
        badge: "Bestseller",
        rating: 5
    },
    {
        id: 4,
        name: "Classic Chronograph",
        category: "Timepieces",
        price: 6499,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80",
        rating: 5
    },
    {
        id: 5,
        name: "Premium Sneakers",
        category: "Footwear",
        price: 1999,
        image: "https://images.unsplash.com/photo-1722973020408-2c7cf449538b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxwcmVtaXVtJTIwc25lYWtlcnMlMjBmb3IlMjBtZW4lNUN8ZW58MHx8MHx8fDA%3D",
        badge: "Limited",
        rating: 5
    },
    {
        id: 6,
        name: "Leather Tote Bag",
        category: "Bags",
        price: 2599,
        originalPrice: 3299,
        image: "https://images.unsplash.com/photo-1713425887346-2ef9f2b67bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHByZW1pdW0lMjBsZWF0aGVyJTIwdG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
        rating: 5
    },
    {
        id: 7,
        name: "Oxford Dress Shirt",
        category: "Men's",
        price: 959,
        image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=400&q=80",
        rating: 5
    },
    {
        id: 8,
        name: "Chelsea Ankle Boots",
        category: "Footwear",
        price: 2899,
        originalPrice: 3799,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
        badge: "Sale",
        rating: 5
    }
];

// State
let cart = JSON.parse(localStorage.getItem('luxeCart')) || [];
let currentProducts = [...products];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    renderCart();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('categoryFilter').addEventListener('change', handleCategoryFilter);
    document.getElementById('sortFilter').addEventListener('change', handleSort);

    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.getElementById('categoryFilter').value = category;
            handleCategoryFilter();
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.getElementById('newsletterForm').addEventListener('submit', handleNewsletter);
}

// Render Products
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    currentProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <div class="product-actions">
                        <button class="action-btn" onclick="addToCart(${product.id})" title="Add to Cart">🛒</button>
                        <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">👁️</button>
                    </div>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <span class="stars">${'★'.repeat(product.rating)}</span>
                        <span class="rating-count">(${Math.floor(Math.random() * 200) + 50})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">₹${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    renderCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
    showToast('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛍️</div>
                <p>Your cart is empty</p>
                <a href="#shop" class="btn-primary" onclick="closeCart()">Start Shopping</a>
            </div>
        `;
        cartSubtotal.textContent = '₹0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <p class="cart-item-category">${item.category}</p>
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">₹${item.price}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotal.textContent = `₹${subtotal}`;
    }
}

function saveCart() {
    localStorage.setItem('luxeCart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

// Filter Functions
function handleCategoryFilter() {
    const category = document.getElementById('categoryFilter').value;
    currentProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
    renderProducts();
}

function handleSort() {
    const sortValue = document.getElementById('sortFilter').value;
    switch (sortValue) {
        case 'price-low': currentProducts.sort((a, b) => a.price - b.price); break;
        case 'price-high': currentProducts.sort((a, b) => b.price - a.price); break;
        case 'name': currentProducts.sort((a, b) => a.name.localeCompare(b.name)); break;
        default:
            const category = document.getElementById('categoryFilter').value;
            currentProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
    }
    renderProducts();
}

// Newsletter
function handleNewsletter(e) {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    e.target.reset();
}

// Quick View
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    showToast(`Quick view: ${product.name}`);
}

// Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}