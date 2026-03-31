// let student={
//     name:"sujith varma",
//     age:19,
//     cgpa:9.04,
// };
// console.log(student);
// const item={
//     price:100.00,
//     colors:["red","pink"],
// };
// const thread={
//     username:"@sujithvarma07",
//     content:"i am be yours",
//     likes:2300,
//     reposts:4,
//     tags:["college","delta","school"],

// };// in websites also mostly object literals are used
// console.log(student["name"]);
// console.log(student.name);
// // const hmm={
// //     1:"hklfl",
// //     null:"fjskfjl",
// // };
// student.name="lavanya";
// console.log(student);
// student.gender="female";
// console.log(student);
// student.age="young";
// console.log(student);
// delete student.gender;
// console.log(student);
// const classInfo={
//     aman: {
//         grade:"A+",
//         city:"delhi"
//     },
//     shradha:{
//         grade:"A+",
//         city:"delhi",
//         gender:"female"
//     },
//     karan:{
//          grade:"A+",
//         city:"chennai",
//     }
// };

// const hehe=[
//     {
//        name:"lawda",
//        age:68
//     },
//     {
//        name:"akanshabitch",
//        age:34
//     }, 20

// ]
// const car={
//     name:"bmw",
//     model:"3 competition",
//     color:"blue"
// };
// console.log(car.name);
// car.countryoforigin="germany";
// console.log(car);

// let range=prompt("Enter the range u want:");
//  let correctnumber=Math.ceil(Math.random()*range);// u can also use Math.floor(Math.random()*max)+1;
// while(true){
//     let userguess=prompt("Enter your guess:");
//     userguess=userguess.trim();
//     if(correctnumber==userguess){
//         console.log("Congratulations you have guessed the correct number",correctnumber);
//         break;
//     }
//     else if(userguess==="quit"){
//         console.log("U lost because of giving up . Better luck next time");
//         break;
//     }
//     else if(userguess>correctnumber){
//         alert(" HINT :) Your guess is larger than correctnumber!!");
//     }
//      else if(userguess<correctnumber){
//         alert(" HINT :) Your guess is smaller than correctnumber!!");
//     }
//     else{
//       console.log(" wrong number please try again!");
//     }
// }
// function hello(){
//     console.log("hello");
// }
// hello();
// function dicenumberdisplay(){
//     return Math.ceil(Math.random()*6);
// }
// function printname(name,age){// we no need give the data type for arguments please keep this thing in mind bro and be careful do not assume like java and c
//     console.log(`name is ${name} and age is ${age}`);
// }
// printname("sujith",17);
// function average(a,b,c){// do not pass the type in the arguments
//      let avg=(a+b+c)/3;
//      console.log(`hence the average is ${avg}`);
// }
// average(2,3,1);
// function table(number){
//     for(let i=1;i<=10;i++){
//         console.log(number*i);
//     }
// }
// table(10);
// let sum=0;
// function getsum(n){// also make sure function names and variable names are not same
//     for(let i=1;i<=n;i++){
//       sum+=i;
//     }
//     return sum;
// }
// let hmmsumaa=getsum(67);
// console.log(hmmsumaa);

// let finalstring="";
// function stringcon(array){
//     for(let i=0;i<array.length;i++){
//         finalstring+=array[i];
//     }
//     return finalstring;
// }
// console.log(stringcon(["sujith","akancha","preeti"]));
// {
//     let suma=2+3;
// }
// console.log(sum);
// let sum=function(a,b){
//     return a+b;
// }
// sum=function(){
//     return "namaste";
// }
// let greet =function(){
//     console.log("namaste");
// }
// function mutli(func,count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// mutli(function(){
//     console.log("hehe");
// },1000);

// function oddeventest(request){
//       if(request=="even"){
//           return function(n){
//               console.log(n%2==0);
//           }
//       }
//       else if(request=="odd"){
//           return function(n){
//               console.log(n%2!=0);
//           }
//       }
//       else{
//           console.log("wrong request");
//       }
// }

// let heheh=oddeventest("even");
// heheh(10);

// const calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a+b;
//     },
//     mul: function(a,b){
//         return a+b;
//     }
// };
// console.log(calculator.add(1,6));


// const shorthand={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// };
// console.log(shorthand.add(1,6));

// const student={
//      age:23,
//      get(){
//         console.log(this.age*23);
//      }
// };
// student.get();

// try{
//     console.log(a);
// }catch{
//     console.log("not woeking ");
// }
// setTimeout( ()=>{
//      console.log("apna college");
// },4000);
// const sum= (a,b) =>{
//     console.log(a+b);
// }
// console.log(sum(2,67879));

// const mul=(a,b)=>(a*b);// no need to write return for single value and also u should include the () this brackets

//  let id=setInterval(()=>{
//    console.log("heeh");
// },3000);
// let id2=setInterval(()=>{
//    console.log("heeheeeeeeeeee");
// },6000);

let id=setInterval(()=>{
    console.log("printllj");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);