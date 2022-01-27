const prompt = require('prompt-sync')();
// let num = prompt("Enter integer number");

// if (num % 2 == 0){
//     console.log("Even");
// }else{
//     console.log("odd");
// }


// function f1() {
//     console.log("f1");
//     return true;
// }

// function f2() {
//     console.log("f2");
//     return false;
// }

// console.log(f1() || f2()); // this will create a logical OR short-circuit, this will check for f1 function

// let res1 = f1();
// let res2 = f2();
// console.log(res1 || res2); // this will check for both f1 and f2 function

// hand-on question

let x = 3;
let y = 4;
let password = "rotiprata"

// q1
console.log(undefined || x);
//3

//q2
console.log(x == parseInt("2")+1);
//true 

//q3
//y === prompt("") //user types in 4
// 4 === "4"
//false

//q4
console.log(x==4? 10: 15);
//15

//q5
//Yes

//q6
console.log((0||y) && true);
//true

//q7
console.log(x+ "" +y == 34); //concatenation 
//true

//q8
//B

//q9
console.log(password==='rotiprata' && x-4);
// -1


//q10
//Not ok

//q11
console.log(password/3 ? "ok" : "not ok");
//not ok

//q12
console.log(Math.sqrt(x-y)); //it will give not a number 
//not ok

