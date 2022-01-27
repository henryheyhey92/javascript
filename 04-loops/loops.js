//we print 10 gong xi fa cai to console

//1. sentinel variable - controls the loop

let counter = 0;

//2. begin the while loop
// figure out the experssion that will evaluate to true
// if we want to continue one round in the loop
//"one" round in the Loop => an iteration

// while(counter < 10){
//     console.log("gong xi fa cai");
//     //counter = counter + 1;
//     counter++;
// }


// let money = 100;
// let day = 1;
// let saveAmt = 10;

// while(saveAmt < 100){
//     saveAmt = saveAmt + 1;
//     day++;
// }
// console.log("How many days to save 200: " + day);


// calcuate taxi fare
//10km = 10000m 

let money = 35;
let travel = 0;
while(money > 0){
    
    if(travel < 10000)
    {
        money = money - 3.50;
        console.log(money);
        travel += 500;
    }
    if(travel >= 10000)
    {
        money = money - 3.50;
        console.log(money);
        travel += 400;
    }
}

console.log("How many km: "+ travel/1000);