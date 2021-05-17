//* #1
//? Solution 1
const factorial = () => {
  let total = 1;
  let newTotal;
  for (let i = 1; i < num; i++) {
    newTotal = i * total;
    total += newTotal;
  }

  return total;
}

factorial(5)

//? Solution 2
function factorialize(num) {
  if (num < 0){
      return -1
  } else if (num === 0){
      return 1
  } else {
      return (num * factorialize(num - 1))
  }
}

//? Solution 3
function factorialize(num) {
  let result = num
  if (num === 0 || num === 1) {
      return 1
  }
  while (num > 1) {
      num--
      result *= num
  }
  return result
}


//* #2
const obj = {
  person: {
      name: 'Tyler',
      age: 28,
      height: '180cm'
  },
  hobbies: {
      sport: 'Football',
      game: 'Overwatch'
  }
}

const objectToArray = () => {
  let arr = []
  for (let key in obj) {
    arr.push(obj[key])
  }
  console.log(arr)
}

objectToArray(obj)

//? Solution 
// function objectToArray(object){
//   let array = []
//   for(let key in object){
//       array.push(object[key])
//   }
//   return array
// }
// console.log(objectToArray(obj))