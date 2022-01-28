const prompt = require('prompt-sync')();
// Q1: challenge 1 

// function replaceNthCharacter(s, character, index){
//     let newString = [];
//     for(let i =0; i< s.length; i++)
//     {
//         if(i == index)
//         {
//             newString = newString + character;
//         }
//         else
//         {
//             newString = newString + s[i];
//         }
//     }
//     return newString;
// }


// console.log(replaceNthCharacter("ABC","Z", 1));


//Q2

//Use math.random()
// 1) start with $100, 
// 2) roll one dice, 1...6
// 3) ask much the user wana bet , then roll second dice
//4) if  the sum is 7, the player loses the amount , else he earns an amount eqaul to the bet
//5) ask if the player want to continue

// const rndInt = Math.floor(Math.random() * 6) + 1
// console.log(rndInt)

//start code
// const prompt = require('prompt-sync')();
// function craps() {
    
//     let ans = true;

//     while(ans){

//         let resDice1, resDice2;
//         let sumOfDice = 0;
        
//         resDice1 = rollDice();
//         console.log("the 1st dice roll result : ", resDice1);
        
//         let betAmt = parseFloat(prompt("Please enter your bet amount : "));
        
//         if( betAmt > 100){
//             console.log("Your are not allow to bet more than 100");
//             return 0;
//         }
        
//         resDice2 = rollDice();
//         console.log("the 2nd dice roll result : ", resDice2);
//         sumOfDice = resDice1 + resDice2;
//         console.log("Sum of the dice : ", sumOfDice);
        
//         if(sumOfDice === 7)
//         {
//             console.log("You lose : "+ betAmt);
//         }
//         else
//         {
//             console.log("You win : "+ betAmt);
//         }
        
//         let reply = prompt("Do you want to contine? (y/n)");

//         if(reply.toUpperCase() === "N"){
//             return "End";
//         }

//     }
    
    
// }

// function rollDice(){
//     let dice = Math.floor(Math.random() * 6) + 1;
//     return dice;
// }

// console.log(craps());


// Q3
// Tit Tat Toe 



let arr = [[0,0,0], [0,0,0], [0,0,0]];
let counter = 0;
let complete = 0;
let arrText='';


function check(arr, num)
{   
    complete = 0;
    //diagonal from top left to bottom right
    for(let i = 0; i< arr.length; i++){
        if(arr[i][i] == num)
        {
            complete += 1;
            if(complete == 3)
            {
                return 1; //return true;
            }
        }else{
            break;
        }
    }

    complete = 0;
    let j = 0
    // diagonal form top right to left bottom 
    for(let i = 2; i >=0; i--)
    {
        if(arr[i][j++] == num)
        {
            complete += 1;
            if(complete == 3)
            {
                return 1; //return true;
            }
        }else{
            break;
        }
    }

    complete = 0;
    //find by row
    for(let i = 0; i<arr.length; i++)
    {
        for(let j = 0; j<arr.length; j++)
        {
            if(arr[i][j] == num)
            {
                complete += 1;
                if(complete == 3){
                    return 1;
                }
            }
            else
            {
                break;
            }
        }
    }

    complete = 0;
    //find by col
    for(let i = 0; i<arr.length; i++)
    {
        for(let j = 0; j<arr.length; j++)
        {
            if(arr[j][i] == num)
            {
                complete += 1;
                if(complete == 3){
                    return 1;
                }
            }
            else
            {
                break;
            }
        }
    }
    
}
function displayArr(){
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arrText+=arr[i][j]+' ';
        }
        console.log(arrText);
        arrText='';
    }
}



while(1){

    //ask player one for input
    let p1Row = parseInt(prompt("Player 1 enter your row index: "));
    let p1Col = parseInt(prompt("Player 1 enter your col index: "));
    arr[p1Row][p1Col] = 1;
    //console.log(arr);
    displayArr();

    //check function
    if(check(arr, 1)){
        console.log("player 1 win");
        return 0;
    }
    

    //ask player two for input 
    let p2Row = parseInt(prompt("Player 2 enter your row index: "));
    let p2Col = parseInt(prompt("Player 2 enter your col index: "));
    arr[p2Row][p2Col] = 2;
    //console.log(arr);
    displayArr();

    //check function
    if(check(arr, 2)){
        console.log("player 2 win");
        return 0;
    }


    counter++;

    if(counter >= 9)
    {
        console.log("board is full!");
        return 0;
    }
}




