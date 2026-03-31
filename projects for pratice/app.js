const form =document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',function(event){
  event.preventDefault();// for preventDefault brackets will come since it is fucntion

  validateInputs();
});
const setError = (element,message)=>{
    const inputControl=element.parentElement;// for parent element no () will come please keep in mind since it is just a value
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;

};
const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);// pattern.test(email)
}

const validateInputs = () =>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    if(usernameValue===''){
        setError(username,'Username is required');
    }
    if(emailValue===''){
        setError(email,'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email,'provide a valid email address');
    }
    if(passwordValue===''){
        setError(password,'password is required');
    }
    if(password2Value===''){
         setError(password2,'password2 is required');
    }else if(password!==password2){
        setError(password2,'password does not match with the original password');
    }
}