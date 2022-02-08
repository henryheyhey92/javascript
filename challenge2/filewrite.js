const prompt = require('prompt-sync')();

const fs = require('fs');

let data = fs.readFileSync('data.txt');

let arr = data.toString().split("\n");

while(true){
    let str = prompt("Enter a fruit name :");

    if(!arr.includes(str)){
        console.log("End");
        break;
    }else{
        fs.appendFileSync("data.txt", "\n"+str);
    }
}