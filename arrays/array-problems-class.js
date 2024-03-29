class ArrayProblems {
  constructor() {}
  
  static findLargest(arr) {
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

  static fibbonachi(length) {
    const fibbonachiArr = [];
    fibbonachiArr.push(0);
    fibbonachiArr.push(1);
    for(let current = 0; current < length-2; current++) {
      fibbonachiArr.push(fibbonachiArr[current] + fibbonachiArr[current+1]);
    }
    return fibbonachiArr;
  }

  static fibb(large) {
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

  static isFound(arr, value) {
    for(const item of arr) {
      if(value === item) {
        return true;
      }
    }
    return false;
  }

  static notFibNum(arr) {
    const largest = this.findLargest(arr);
    const fibArr = this.fibb(largest.largest);
    console.log(arr);
    console.log(largest);
    console.log(fibArr);
    const notListed = [];
    for(const el of arr) {
      if(!this.isFound(fibArr, el) && !this.isFound(notListed, el)) {
        notListed.push(el);
      }
    }
    return notListed;
  }

  static notFibNumAlt(arr) {
    const largest = this.findLargest(arr);
    const fibArr = this.fibb(largest.largest);
    console.log(arr);
    console.log(largest);
    console.log(fibArr);
    const noDup = new Set();
    for(const el of arr) {
      if(!this.isFound(fibArr, el)) {
        noDup.add(el);
      }
    }
    const result = [];
    for(const el of noDup) {
      result.push(el);
    }
    return result;
  }

}

const arr3 = [3,49,50,8,1,15,14,5,9,4,6,49,15,6,50,15];
console.log(ArrayProblems.notFibNum(arr3));

// O(2n) Time Complexity