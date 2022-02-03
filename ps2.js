arr = [6,7,11,7,6,8];

let len = arr.length;
arr.sort((a, b) => a - b);
console.log(arr);
let mid = arr[(len - 1) / 2];
let left = 0;  //whatever on the left is smaller than mid pt
let right = arr.length - 1; //whatever on the right is bigger than the mid pt
let i = 0;
let newArr = [];
let k = 5;

while (i < k) {
    //2 point solution
    if (mid - arr[left] > arr[right] - mid) {
        newArr[i++] = arr[left++];
    }
    else {
        newArr[i++] = arr[right--];
    }
}

console.log(newArr);
