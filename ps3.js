let arr = [4,3,1,1,3,3,2];
let temp = 0;
let map1 = new Map();
let len = arr.length;
let k = 2;
    
for(let i = 0; i<len; i++)
{
    if(map1.get(arr[i]) == undefined || map1.get(arr[i]) == NaN)
    {
        map1.set(arr[i], 1);
    }else{
        map1.set(arr[i], map1.get(arr[i]) + 1);
    }
    
}
// remove the least occur number
for(let i = 0; i< map1.size; i++)
{
    // { 4 => 1, 3 => 3, 1 => 2, 2 => 1 }
    map1.set(arr[i], map1.get(arr[i]-1));
    if
    
}

console.log(map1);