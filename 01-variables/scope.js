const prompt = require('prompt-sync')();

//in JavaScript, {...} forms a scope
let age = parseInt(prompt("Please enter your age: "));
if (age < 67){
    console.log("You cannot retire yet");
    console.log("Your CPF money is still frozen");
    let x = 42;
}

console.log(x);
