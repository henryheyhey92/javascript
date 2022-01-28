// why the backtick string is special 
// 1. backtick can have line and spacings, it will format in the space you have type

let letter = `Dear Sir,
    Your bill of the $500.0 is overduw on 31/01/2022. Please
    make sure to pay your bills in time or late fees.
    
    Regards,
        customer Service`;

console.log(letter);

//2. you can easily sub variables into it
let firstName = "Jane";
let lastName = "Smith";
let bill = 200;

let formLetter = `
Dear ${firstName} ${lastName}

    Your bill of ${bill} is due. If you do not pay,
    there will be a 10% late charge, which will be ${bill * 0.1}
`;

console.log(formLetter);


let fruits = "bananas";
console.log("fruits[1]")


let phrase = "The quick brown fox jump over the lazy dog";

console.log("fourth character=", phrase[2]);
console.log("length of the phrase =", phrase.length);

//slice strings
//start slicing from index 3 all the way to the end 
console.log("phrase.slice(3) =>", phrase.slice(3));
console.log("phrase after slice=>", phrase);

console.log("slice from 6 to 12=>", phrase.slice(6,12));