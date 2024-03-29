const arr1 = [3,49,50,8,1,15,14,5,9,4,6];
const arr2 = [5,2,4,7,3,8,12,45,9,1];
const arr3 = [3,49,50,8,1,15,14,5,9,4,6,49,15,6,50,15];
const arr4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// largest, second and third largest element in an array
function findLargest(arr) {
  let largest = 0;
  let secondLargest = 0;
  let thirdLargest = 0;
  let fourthLargest = 0;
  for(const el of arr) {
    if(el > largest) {
      fourthLargest = thirdLargest;
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = el;
    } else if (el > thirdLargest) {
      thirdLargest = el;
    } else if (el > fourthLargest) {
      fourthLargest = el;
    }
  }
  return {
    largest: largest,
    secondLargest: secondLargest,
    thirdLargest: thirdLargest,
    ufourthLargest: fourthLargest
  };
}

// console.log(findLargest(arr2));


// 0 1 1 2 3 5 8 13 21 ...
function fibbonachi(length) {
  const fibbonachiArr = [];
  fibbonachiArr.push(0);
  fibbonachiArr.push(1);
  for(let current = 0; current < length-2; current++) {
    fibbonachiArr.push(fibbonachiArr[current] + fibbonachiArr[current+1]);
  }
  return fibbonachiArr;
}


function fibb(large) {
  const fibbonachiArr = [];
  fibbonachiArr.push(0);
  fibbonachiArr.push(1);
  
  let limit = true;
  let current = 0;
  while(limit) {
    const next = fibbonachiArr[current] + fibbonachiArr[current+1];
    if(next <= large) {
      fibbonachiArr.push(next);
      current++;
    } else {
      limit = false;
    }
  }
  return fibbonachiArr;
}
function isFound(arr, value) {
  for(const item of arr) {
    if(value === item) {
      return true;
    }
  }
  return false;
}
console.log(fibbonachi(20));

function notFibNum(arr) {
  const largest = findLargest(arr);
  const fibArr = fibb(largest.largest);
  console.log(arr);
  console.log(largest);
  console.log(fibArr);
  const notListed = [];
  for(const el of arr) {
    if(!isFound(fibArr, el) && !isFound(notListed, el)) {
      notListed.push(el);
    }
  }
  return notListed;
}

console.log(notFibNum(arr4));

// O(2n) Time Complexity

