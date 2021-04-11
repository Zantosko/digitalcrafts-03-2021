const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//* Higher Order Functions & Arrays

//? forEach - Used to loop through an array (similar to a for-loop). It doesn't return anything back to you, but its a cleaner way to iterate over arrays. forEach takes in a synchronous callback function(not asynchronous).

// Old way to do it
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach() method
companies.forEach((company) => {
  console.log(company);
});


//? filter - It allows you to filter things out from the array. With this method you don't have to create a new array and push to it, the filter() method takes care of that for you.

//todo Example 1
// Old way
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// filter() method
// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink)

// filter() with ES6 Arrow functions
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink)

//todo Example 2


//? map - 
//? sort
//? reduce