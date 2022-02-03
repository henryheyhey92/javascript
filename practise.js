let s = "is2 sentence4 This1 a3";

    let words = s.split(' ');
    let map1 = new Map();
    let sLen = words.length;
    let newString; 
    
    for(let i =0; i< sLen; i++)
        {
            let wLen = words[i].length;
            let keyNum = words[i].substring(wLen-1, wLen);
            let keyWord = words[i].substring(0, wLen-1);
            console.log("keyNum : ", keyNum);
            console.log("keyWord :", keyWord);
            map1.set(keyNum, keyWord);
            console.log("Temp : ", map1.get(keyNum));
        }

        newString = map1.get('1');
        
    for(let i =2; i<=sLen; i++)
        {
            let temp = map1.get(i.toString());
            newString = newString+" "+ temp;
            console.log("newString :", newString);
        }

        console.log(newString);
// let words = s.split(' ');

// console.log(words[1]);
// console.log(words.length);

// let arr1;
// let arr2;

// console.log("number => ",words[0].substring(words[0].length-1, words[0].length));
// console.log("Get word => ", words[0].substring(0, words[0].length-1));

// let num = words[0].substring(words[0].length-1, words[0].length);
// let word = words[0].substring(0, words[0].length-1);

// let map1 = new Map();

// map1.set(num, word);

// console.log(map1.get(num));

// let student = {
//     firstName:'John',
//     lastName:'Smith',
//     'age': 19,
//     contact:{
//       email:'johnsmith@fakeschool.com',
//       phoneNumber:{
//         'country code':'+65',
//         'number': '9919912'
//       }
//     },
//     address: {
//       'streetName':'Yishun Ring Road',
//       'building': 'Blk 171 #11-221'
//     },
//     classes:[
//       "Computing 101", "Computing 102", "Computing 103"
//     ],
//     grades:[
//       {
//         'subject name':'Computing 1',
//         'Grade': 85
//       },
//       {
//         'subject name':'Computing 2',
//         'grade': 31
//       },
//       {
//         'subject name':'Computing 3',
//         'grade': 75
//       }
//     ]
// }

// console.log(student['age']);

// // let s = student;
// // s.contact.email = "johnsmith@fakehotmail.com";
// // console.log(student.contact.email); 

// for(let x in student.address)
// {
//     console.log(x+" : "+student.address[x]);
// }