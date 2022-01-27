const prompt = require('prompt-sync')();
let num = prompt("Enter integer number");

if (num % 2 == 0){
    console.log("Even");
}else{
    console.log("odd");
}