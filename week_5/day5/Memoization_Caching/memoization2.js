// Memoization is a type of caching. If you are caching the result of a function, it's called memoization. Caching makes a trade-off between time complexity and space complexity. It's faster, but it does take up more space in memory.


//? Sorting
const uniqSort = (arr) => {

  return arr.sort((a, b) => a - b);
}

const cache = {}
const anagram = (str1, str2) => {
  newStr1 = str1.replace(/[^\w]/g, "").toLowerCase()
  newStr2 = str2.replace(/[^\w]/g, "").toLowerCase()

}


//? Memoization Exercise
// Write a function, times10 that takes an argument "n" and multiples "n" times 10.
// const times10 = (n) => n * 10;

// console.log("times10 returns:", times10(9));

const cache = {};

const times10 = (n) => n * 10;

const memoTimes10 = (n) => {
  if (n in cache) {
    console.log("Fetching from cache", n)
    return cache[n];
  } else {
    console.log("calculating result");
    cache[n] = times10(n);
    return cache[n];
  }
}
// Result: Fetching from cache 9
console.log('Calculated value of 9:', memoTimes10(9));    // calculated

// Fecthing from cache 9
console.log('Cached Value of 9', memoTimes10(9));    // cached