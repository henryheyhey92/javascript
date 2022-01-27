const prompt = require('prompt-sync')();
//ternary operator 

// <expression> ? <do this if true> : <otherwise do this>
let number = parseInt(prompt("Number please: "));

number %2 == 0 ? console.log("Even") : console.log("Odd");


let name = prompt("Enter a name");
//if name is empty, set N/A
name = name || "N/A";
//if user enters "" for name
//name = "" || "N/A"
// name = "N/A"


//if the user enters "ahkow" for name
//name = "ahkow" || "N/A"
//name = "ahkow"