/**
 * The idea of Memoization is that you store the previous results so if you call a function and pass it the same value over and over again, it can return the value instantaneously.
 */
// This way is very inefficient
function square(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1
    }
  }
  return result
}

console.log(square(30000))
console.log(square(30000))
console.log(square(30000))

// More efficient way!
const prevValues = []

function square2(n) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1
    }
  }
  prevValues[n] = result
  return result
}

console.log(square2(30000))
console.log(square2(30000))
console.log(square2(30000))

//* Dynamic Programming

//? Fibbonacci Sequence
function fib(n) {
  if (n <= 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

console.log(fib(40))

// More efficient way!
function fib2(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result
  if (n <= 2) {
    result = 1
  } else {
    result = fib2(n - 1, prevValues) + fib2(n - 2, prevValues)
  }
  prevValues[n] = result
  return result
}

console.log(fib2(40))