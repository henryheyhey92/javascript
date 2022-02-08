//let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let height = [1,1];
let len = height.length;
let temp = 0;
let area;

for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        //area = height[i]*i
        //compare current index height with the next height
        if (j + 1 > len) {
            break;
        }

        if (height[i] > height[j]) {
            area = height[j] * (j-i);
            console.log("(For left bigger ) This is index :"+i+" and "+(j)+" area :"+ area);
        } else {
            area = height[i] * (j-i);
            console.log("Height :", height[i]);
            console.log("j-1", j-1);
            console.log("(For right bigger ) This is index :"+i+" and "+(j)+" area :"+ area);

        }

        if (area > temp) {
            temp = area;
        }
    }
}

console.log("This is temp: "+temp);

