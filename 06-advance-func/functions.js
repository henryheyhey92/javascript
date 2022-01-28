function foobar(x) {
    return x * -1;
}

console.log('foobar() =>', foobar(10));
console.log('foobar =>', foobar);

let f = foobar; // what this does is to pass the reference of foobar to f (this is example of higher order function)

//annymous functions
//funcation
(function() {
    console.log("Hello Wolrd")
});

//function expression
let f = function(n){
    return n * 2;
}

console.log(f(3));

//js will perfom hoisting


//if the function body has only one line
// and that line is a return, you can omit
// the {} and the return
let p = (x,y) => x-y;

