// let change=document.getElementsByClassName("oldImg");
// for(let i=0;i<change.length;i++){
//      change[i].src="spiderman_img.png";
//      console.log(`the thing is ${i} is changed `);
// }
// console.dir(document.querySelectorAll("div a"));

// let aobj=document.querySelectorAll(".box a");
// // for(let i=0;i<aobj.length;i++){
// //     aobj[i].style.color="yellow";
// // } can also be written as

// for(aob of aobj){
//     aob.style.color="green";
// 
// let body=document.querySelector('body');
// let para=document.createElement('p');
// para.innerText="Hey I'm red!";
// // para.style.color="red";
// para.classList.add('parastyle')
// body.append(para);
// let head=document.createElement('h3');
// head.innerText="I'm a blue h3!";
// // head.style.color="blue";
// head.classList.add('heads');
// body.append(head);
// let dive=document.createElement('div');
// // dive.style.border="2px solid black";
// // dive.style.backgroundColor="pink";
// dive.classList.add('divs');
// let head2=document.createElement('h1');
// let para2=document.createElement('p');
// head2.innerText="I'm in a div";
// para2.innerText="ME TOO!";
// dive.append(head2);
// dive.append(para2);

// body.prepend(dive);


let input =document.createElement('input');
let btn=document.createElement('button');
btn.innerText="Click me";
document.querySelector('body').append(input);
document.querySelector('body').append(btn);

input.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

btn=document.querySelector('#btn');
btn.classList.add('btnc');

let head=document.createElement('h1');
head.innerText="DOM pratice";
head.classList.add('heads');
document.querySelector('body').append(head);

let para=document.createElement('p');
para.innerHTML="<p>Apna College <b>Delta</b> Pratice</p>";
document.querySelector('body').append(para);