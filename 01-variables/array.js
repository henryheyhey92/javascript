let fruits = [];
let numbers = new Array();
let allZeroes = new Array(10);
console.log(allZeroes);

let food = ["chicken rice", "duck rice", "orange juice"];
console.log("food[1] =>", food[1]);

//reassign to index 2 of the array 'food'
food[2] = 'papaya juice';
console.log("food =", food);

food = ["ramen", "udon", "raw fish"];
console.log("After reassigning food = ", food);

let complex = [1, 2, 3, ['A', 'B', ['Alpha', 'Beta'], 'C']];

console.log(complex[3][2][0]);


//Array are reference values
//b1.slice ; the slice is to make a copy 
let b1 = ["A", "B", "C"];
let b2 = b1;
b2[0] = -99;
console.log(b2);
console.log(b1);