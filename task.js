"use strict";

// Task # 1

function getArrayParams(arr) {
    let min = Infinity;
    let max = -Infinity;
    let x;
    let i;
    let sum = arr.map(i=>x+=i, x=0).reverse()[0];
    let avg = +(sum/arr.length).toFixed(2);
    for (i of arr){
        if (i > max) {
            max = i;
        };
        if (i < min) {
            min = i;
        };
    };
    return {
        min: min, 
        max: max, 
        sum: sum, 
        avg: avg
    };
};

console.log(getArrayParams([1,2,3,0,-1,-3]));
console.log();

// Task # 2

function worker(arr) {
    let x;
    let sum = arr.map(i=>x+=i, x=0).reverse()[0];
    return sum;
  };
  
  function makeWork(arrOfArr, func) {
    let max = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
      let arrSum = func(arrOfArr[i]);
      if (arrSum > max) {
        max = arrSum;
      }
    }
    return max;
  };

console.log(makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker));
console.log();

// Task # 3

function worker2(arr) {
    return getArrayParams(arr).max - getArrayParams(arr).min;
}

let arrOfArr = [[-10, -20, -40], [10, 20, 30]];

console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
console.log(makeWork(arrOfArr, worker2)); // 30