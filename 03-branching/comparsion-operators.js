console.log("3" == 3) 
//the above will be true 
// the above is equivalent comparator, not equal comparator 

//strict comparison
console.log('"3" === 3', "3" === 3);

console.log('"3" != 3 =>', "3" != 3); // compare whether is it equivalent 
//above will be equal to true

console.log('"3" !== 3 =>', "3" !== 3); // compare whether is it equal value 
//the above will be equal to false 

let password = "rotiprata123";
if(password === "rotiprata123"){
    console.log("successful ");
}else{
    console.log("Fail");
}