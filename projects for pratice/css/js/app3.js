// let num=[1,2,3,4,5];
// let even =num.filter((el)=>{
//     return el%2==0;
// });
// console.log(even);
// let double=num.map((el)=>{
//     return el*20;
// });
// let students=[
//     {
//       name:"sujith",
//       marks:95

//     },
//     {
//       name:"aman",
//       marks:44
//     },
//     {
//       name:"pujith",
//       marks:97
//     }
// ];
// let gpa=students.map((el) => {
//     return el.marks/10;
// });
// console.log(gpa);
// console.log(double)
// let numa=[1,2,3,4];
// let finalVal=numa.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(finalVal);


// let arr=[1,23,4,5,6,7,98,456,5,6,7];
// let highest=arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(highest);


// let arr1=[-1,23,4,5,6,7,98,456,5,6,7];
// let highest1=arr.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
// console.log(highest1);
// console.log(Math.min(...arr1));
// let arr2=[...arr1];
// let chr=[..."sujithvarma"];
// let odd=[1,2,3,4];
// let even=[3,6,6,6];
// let combine=[...odd,...even];

// function sum(...hel){
//     return hel.reduce((sum,el)=>sum+el);
// }
// let names=["tony","bruce","peter","steve"];
// let[winner,runner,...rest]=names;
// console.log(winner,runner,rest);