// let btns=document.querySelectorAll('button');
// function sayHello(){
//      alert("thank you for clicking me");
// }
// function sayHi(){
//     alert("hi bro enna mid-term aa enjoy...:)")
// }
// for(btn of btns){
//     // btn.onclick=sayHello;
//     // btn.onmouseenter=function(){
//     //     console.log("hello");
//     // }
// //    btn.addEventListener("click",sayHello);
// //    btn.addEventListener("click",sayHi);
//    btn.addEventListener("dblclick",function(){
//       alert("hmm double click aa!!");
//    })
// }


// let btn=document.querySelector('button');

// btn.addEventListener("click",function(){
//      let h3=document.querySelector('h3');
//      let randomColor=getRandomColor();
//      h3.innerText=randomColor;
//      let div=document.querySelector('div');
//      div.style.backgroundColor=randomColor;
// })

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// btn.addEventListener("click",function(){
//       console.log(this);
//       this.style.backgroundColor="aqua";// this refers to the object which it is present inside
// })

// let press=document.querySelector('input');
// press.addEventListener("keyup", function(event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was released");
// });


let form=document.querySelector('form');
form.addEventListener("submit",function(event){
  event.preventDefault();
  let inp= document.querySelector("#user");
  let pass= document.querySelector("#pass");
  console.log(inp.value);
  console.log(pass.value);
  alert(`Hi ${inp.value},your password is set to ${pass.value}`);
});

