//* Memoization

//? Quadratic Time Operation
// This solution is less optimal because nested for-loops have a time complexity of O(n^2). This drastically increases time relative to the amount of operations performed (Quadratic Correlation). 
let isUninque = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {
      
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }
  return result;
}

// returns true
console.log(isUninque([1,2,3]))
// returns false
console.log(isUninque([1,1,3]))

//! Improved with Caching
// Using this solution changed the time complexity to O(n) giving us huge gains in performance. Time has a Linear Correlation relative to the number of operations taking place.
isUninque = (arr) => {
  const cache = {};
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      result = false;
    } else {
      cache[arr[i]] = true;
    }
  }

  return result;
}

// returns true
console.log(isUninque([1,2,3]))
// returns false
console.log(isUninque([1,1,3]))