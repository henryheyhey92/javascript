//get a copy of the string in upper case
let phrase = "The quick brown fox jump over the lazy dog";
console.log("phrase.toUpperCase() =>", phrase.toUpperCase());

console.log("phrase.toUpperCase() =>", phrase.toLowerCase());

let w = "12345";
console.log("w.trim() =>", w.trim() + "!");

let w2 = "     12345";
console.log("w.trim() =>", w2.trim() + "!");

console.log('phrase.include("fox") =>', phrase.includes("fox"));
console.log('phrase.include("cat") =>', phrase.includes("cat"));

//find the index of the first occurence of the substring
console.log('phrase.indexOf("fox") =>', phrase.indexOf("fox"));

//split will breaks a string into array
let lunch = "chikcen rice, soya bean milk, siew mai, satay, muffin";
console.log("lunch.split(',') =>", lunch.split(','));

//indexing, slicing in array are same as strings
//functions like slice and includes exits in arrays
//arrays are not immutable

let food = ['chicken rice', 'soya bean', 'muffin'];
food[0] = 'duck rice';
console.log("After food[0] ='duck rice'", food);

//pop is to remove from the end of the array
food.pop();
console.log('food.pop()', food);

food.reverse();
console.log('food.reverse()', food);

//we use splice to delete from the middle of the array
let fruits = ['apples', 'bananas', 'cherries', 'durians', 'oranges'];

//first index is where to start deletling from 
//second index is how many i want to delete
fruits.splice(2,1);
console.log('fruits.splice(2,1) =>', fruits);

let numbers = [1,3,5,7,9,11,13];
numbers.splice(2,3); //start deleting at index and delete 3 items from it
console.log('numbers.splice(2,3) =>', numbers);

//travering through an array
let names = ['alice', 'bob', 'john', 'mary'];

for(let n of names){
    console.log(n, n.length);
}

for(let c of "hellow world"){
    console.log(c);
}
