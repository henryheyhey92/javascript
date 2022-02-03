const fs = require('fs');

let data = fs.readFileSync('data.txt');

let text = data.toString();
console.log(text);