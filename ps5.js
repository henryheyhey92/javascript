// check lower and uppper case

if('Y' == 'Y')
{
    console.log("True");
}
else
{
    console.log("False");
}


let isWeekend = false;
let isRainning = true;

if (isWeekend && !isRainning )
{
    console.log("true");
}
else
{
    console.log("false");
}


//String are immutable
//also do not assume the functions in arrays are also in strings
//this means all the functions for the strings return a copy of the original string, modififed
let s = 'The quick brown fox jumps over the lazy dog';

s.toUpperCase();


//Arrays are mutable
//some if not most of the array functions will modify the aeeay in-situ
//this means- either they don't return anything or they return what you don't expect


let numbers = [41, 4,3,31,51]

numbers.sort(function(a,b) {
    if(a<b){
        return -1
    }else if (a > b){
        return 1;
    }else{
        return 0;
    }
})

numbers.sort((a,b)=>a-b);

numbers.sort((a,b)=> {

})


//object example
let m = {
    'first-name': 'Feng',
    'last-name': 'Lai',
    getSalaryAfterCPF:function(){
        return this.salary*0.8;
    }
}


let keys = {
    'a': [ '7', 2, '3', 5, '8', 1, 7, 8, 1 , 2],
    'b' : {
       'b1': 'base',
       'bay 23':'parking lot 23'
    },
   '31':'thirty one',
   '32': 'thirty two',
   '33': 'thirty three',
   '34': 'thirty-four',
   '35': 'thirty-five',
   'c': ['Charlie', 'Charles', 'Charmile']
  }


let c = 2;
console.log(keys['c'][c]);



let sales =[
    {
      'transactionNo': 1321,
      'salesperson': "Grace",
      'dealAmount': 3700
    },
    {
      'transactionNo': 1571,   
      'salesperson': "John",
      'dealAmount': 1200
    },
    {
      'transactionNo': 1321,
      'salesperson': "Melvin",
      'dealAmount': 7500
    },
    {
      'transactionNo': 1200,
      'salesperson': "Melvin",
      'dealAmount': 7500
    },
    {
      'transactionNo': 1210,
      'salesperson': "John",
      'dealAmount': 1200
    },
   ]

   console.log(sales[4].transactionNo);