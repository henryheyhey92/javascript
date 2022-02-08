const prompt = require('prompt-sync')();

//Q1
// let x = ['a', 'b', 'c', 1, 4, 6, [2, 3], [1,7,3]];

// console.log(x[6][0]);
// console.log(x[6].slice(0,1).toString());

//Q2
// let x = '4';
// let y = 5;

// console.log(x+y);


//Q3
// let s = 1;
// let z = "A.2.3";
// let w = "42";
// let b = 0.1;

// let m = parseFloat(z) + 1 + parseInt(w) /  0.1;

//Q4

// let x = {
//     'abc': 13,
//     'def':7
//    }
//    let y = x.abcd || x.abc;
//    console.log(y);

// console.log(y);

// let keys = {
//     'a': [ '7', 2, '3', 5, '8', 1, 7, 8, 1 , 2],
//     'b' : {
//        'b1': 'base',
//        'bay 23':'parking lot 23'
//     },
//    '31':'thirty one',
//    '32': 'thirty two',
//    '33': 'thirty three',
//    '34': 'thirty-four',
//    '35': 'thirty-five',
//    'c': ['Charlie', 'Charles', 'Charmile']
//   }


// let c = 2;
// console.log(keys['c'][c]);


//Q10

let colors = ['black', 'azure', 'orange', 'white', 'tan', 'red', 'blue', 'green'];
let nums = [2, 3, 1, 4, 2, 1, 1, 0, 5]

function magic(x) {
   x[2] = x[2] + 1;
   x[3] = x[3] + 2;
}

// console.log(colors[ [1,4][1] ]);

// let z = nums;
// z[0] = 4;
// z[1] = 5;
// z[2] = 6;

console.log(nums.slice(2, 4));
console.log(colors[[1,4][1]]);



// let grid = [
//     [1, 2, 3, 5, 3],
//     [2, 1, 4, 2, 7],
//     [5, 2, 3, 2, 1],
//     [3, 2, 1, 2, 4],
//     [6, 0, 3, -1, 7]
    
//     ];
    
//     let items = [
//      'nothing',
//      'axe',
//      'gold',
//      'silver',
//      'food',
//      'water',
//      'chest'
//     ]
    
//     function getGrid(grid, x, y) {
//      let t = grid[x][y];
//      grid[x][y] = 0;
//      return t;
//     }
    
//     function getMagicNumber(w) {
//      return "abcdefghijklmnopqrstuvwxyz".indexOf(w) % 5;
//     }

//     // let k = getMagicNumber('b');
//     // console.log(k);


//     let z = getGrid(grid, items[1].length, items[2].length);
//     let m = getGrid(grid, 3, 4);
//     console.log(z);
//     console.log(m);


// let sales =[
//     {
//       'transactionNo': 1321,
//       'salesperson': "Grace",
//       'dealAmount': 3700
//     },
//     {
//       'transactionNo': 1571,   
//       'salesperson': "John",
//       'dealAmount': 1200
//     },
//     {
//       'transactionNo': 1321,
//       'salesperson': "Melvin",
//       'dealAmount': 7500
//     },
//     {
//       'transactionNo': 1200,
//       'salesperson': "Melvin",
//       'dealAmount': 7500
//     },
//     {
//       'transactionNo': 1210,
//       'salesperson': "John",
//       'dealAmount': 1200
//     },
//    ]

//    //console.log(sales[4].transactionNo);
//    console.log(sales);