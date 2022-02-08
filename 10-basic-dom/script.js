//This is a browser-based javascript
//whst is the diff
//- no modules
// no file io
//no yarn or npm
//alert('hello world');


//doucment is a variable that 
//has been predefinded by the browser
// to be the dom
//console.dir(document);

// let h = document.getElementById('title');
// console.dir(h);
// h.innerhtml = "My tos";

//to select the <h1#title>
let header = document.querySelector('#title');

let firsTodo = document.querySelector('.important');
firsTodo.style.backgroundColor = "red";
firsTodo.style.fontFamily = "Verdana";
firsTodo.style.fontSize = "32px";


//select all the <Lis>
let allTodos = document.querySelectorAll('li');

let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    let title = document.querySelector('#title');
    title.innerHTML = "Goodbye world";
    title.style.color = "red";
});

document.querySelector('#hello').addEventListener('click', function(){
    let title = document.querySelector('#title');
    title.innerHTML = "Hello world";
    title.style.color = "blue"; 
});