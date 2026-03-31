// let name=" sujith  ";
// let newname=name.trim();
// console.log(newname);
// let  str = "FirstName"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let msg="ilovecoding";
// console.log(msg.indexOf("z"));
// let test="     hello      ";
// test= test.toUpperCase().trim();
// console.log(test);
// console.log(msg.slice(1,5));// ending index is not inclusive
// console.log(msg.slice(5));
// console.log(msg.slice(-4));// it means lenght-4 which is msg.slice(7)==ding
// console.log(msg.replace('o','x'));//ilxvecoding
// console.log(msg.replace('love','do'));//idocoding
// console.log(msg.repeat(3));//ilovecodingilovecodingilovecoding

// let msg=" help! ";
// msg=msg.trim().toUpperCase();
// console.log(msg);
// let name="Apna College";
// name=name.slice(5).replace('l','t').replace('l','t');// by this we can replace both the l's
// console.log(name);

let students=["aman","sujith","vijay po da loosu"];
// console.log(students);
// let nums=[2,4,6,8];
// console.log(nums.length);
// let info=["sujith",19,9.05];
// console.log(info[0].length);
// students[0]="thala";
// console.log(students);
// students[11]="ronaldosiuuee";
// console.log(students);
// students.push("hehe");
// console.log(students.push("giganigga"));
// students.pop();
// students.unshift("booyah")
// students.unshift("yeah");
// console.log(students.shift());
// console.log(students);


// let array=["january","july","march","august"];
// array.splice(0,2,"july","june");
// console.log(array);

// let hw=['c','c++','html','javascript','python','java','c#','sql'];
// console.log(hw.reverse().indexOf("javascript"));
// console.log(hw);

// let nums=[[1,2],[3,4,8,9],[4,5]];
// console.log(nums);
// console.log(nums[1][1]);
// let tictac=[['X',null,'O'],[null,'X',null],['O',null,'X']];
// tictac[0][1]='O';
// console.log(tictac);

// console.log([1]==[1]);
// let arr=[1,2,3];
// let arrcopy=arr;
// console.log(arrcopy===arr);
// arrcopy.push(23);
// console.log(arr);


//loop 
// in js do not put int raa we should use let keep your muscle memory aside bro and concentrate
// to print odd numbers from 1 to 15
// for(let i=15;i>=1;i-=2){
//     console.log(i);
// }
// console.log("even numbers are down bruh!");
// //  to print even numbers from 2 to 10
// for(let i=2;i<=10;i+=2){
//     console.log(i);
// }
// //from backwards
// for(let i=1000;i>=2;i-=2){
//     console.log(i);
// }
// mutliplication table of 5
// let n =prompt("which table u wanna print");
// for(let i=0;i<=100;i++){
//    console.log( n," X ",i ," = ",n*i);
// }
// n=parseInt(n);// as the prompt thing return as a string so we are trying to convert it to number type by parseInt()
// for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// }

// // nested loop
// for(let i=0;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=0;j<=3;j++){
//         console.log(j);
//     }
// }

// while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let j=10;
// while(j>=0){
//     console.log(j);
//     j--;
// }

// movie guessor game
// const favMovie="luckybhaskhar";
// let guessMovie=prompt("enter your guess!:");
// while(favMovie!=guessMovie && guessMovie!="exit"){
//     console.log("wrong try ");
//     guessMovie=prompt("wrong guess.please try again!");
// }
// if(guessMovie==favMovie){
//     console.log("Congratulations on finishing the game");
// }else{
//     console.log("you exited the game");
// }


// for(let i=0;i<10;i++){
//    console.log(i);
//    if(i==5){
//       break;
//    }
// }

// for(let i=0;i<students.length;i++){
//     console.log(i,students[i]);
// }

// let heros=[["ironman","thor","spiderman"],["bahubali","hanuman",]];
// for(let i=0;i<heros.length;i++){
//     console.log(i,"th element");
//       for(let j=0;j<heros[i].length;j++){
//          console.log(heros[i][j]);
//       }
// }
// for(hero of heros){
//    for(her of hero)
//      console.log(her);
// }
// for(char of "sujithvarma"){
//    console.log(char);
// }

// let todo=["to study core subjects","to prepare data sturctures and algorithms","to learn machine learning and learn how to integrate it with backend"];
// while(true){
//      let thing = prompt("Enter your command");
//      if(thing==="list"){
//       console.log("-------------list----------------");
//       for(to of todo){
//        console.log(to);
//       }
//       console.log("-----------------------------");
//      }
//      else if(thing==="add"){
//         let hehe=prompt("Enter the task which u need to add:");
//         todo.push(hehe);
//       console.log("------------after adding-----------------");
//       for(to of todo){
//        console.log(to);
//       }
//       console.log("-----------------------------");

//      }
//      else if(thing==="delete"){
//         let hmm = prompt("enter what u wanna delete")
//         for(let i=0;i<todo.length;i++){
//            if(todo[i]===hmm){
//               todo.splice(i,1);
//               break;
//            }
//         }
//       console.log("-------------after deleting----------------");
//       for(to of todo){
//        console.log(to);
//       }
//       console.log("-----------------------------");
//      }
//      else if(thing==="quit"){
//         console.log("u exited the todo app");
//         break;
//      }
//      else{
//         console.log("u entered the wrong prompt");
//      }
// }
// let fact=1;
// for(let i=1;i<=5;i++){
//     fact*=i;
// }
// console.log(fact);
let num=1234;
let digit;
let sum=0;
while(num!=0){
  digit=num%10;
  sum+=digit;
  num=Math.floor(num/10);
}
console.log(sum);