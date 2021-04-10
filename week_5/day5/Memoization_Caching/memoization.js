//* Memoization

//? Quadratic Time Operation
const isUninque = (arr) => {
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