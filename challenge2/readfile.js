const prompt = require('prompt-sync')();

const fs = require('fs');

let data = fs.readFileSync('data.txt');

//let arr = data.split('');
let arr = data.toString().split("\n");

console.log(arr);

const fruit = {
    apple: 0.5,
    orange: 0.7,
    pineapple: 1,
    watermelon: 2.5,
    durian: 10
  };


 console.log(fruit.apple); 
let total = 0;

for(let i = 0; i<arr.length; i++)
{
        total = total + fruit[arr[i].toLowerCase()];
        console.log(arr[i].toLowerCase());
  
}

console.log(total);  // 27.7

/*
    let totalCost = 0;

    for(let eachLine of lines){
        if(eachLine.toLowerCase().trim() in priceChart){
            totalCost += priceChart[eachLine.toLowerCase().trim()];
        }
    }
*/

