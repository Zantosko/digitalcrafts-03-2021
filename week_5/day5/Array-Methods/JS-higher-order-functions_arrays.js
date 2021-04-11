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

//? forEach() - Used to loop through an array (similar to a for-loop). It doesn't return anything back to you, but its a cleaner way to iterate over arrays. forEach takes in a synchronous callback function(not asynchronous).

// Old way to do it
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach() method
companies.forEach((company) => {
  console.log(company);
});



//? filter() - It allows you to filter things out from the array. With this method you don't have to create a new array and push to it, the filter() method takes care of that for you.

//todo Example 1 - Checks for ages greater than 21
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

//todo Example 2 - Checks for companies with "Retail" category

// ES5 Version
// const retailCompanies = companies.filter(function(company) {
//   if(company.category === "Retail") {
//     return true;
//   }
// });

// ES6 Version
const retailCompanies = companies.filter(company => company.category === "Retail");

//todo Example 3 - Checks for companies that started in the 80s

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies)


//todo Example 4 - Checks for companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

console.log(lastedTenYears)



//? map() - Creates new arrays from a current array.

//todo Example 1 - Creates an array of company names

const companyNames = companies.map(company => company.name);
console.log(companyNames);

//todo Example 2 - Creates an array with company names along with start and end dates

const testMap = companies.map(company => {
  return `${company.name} [${company.start} - ${company.end}]`
});
console.log(testMap);

//todo Example 3 - Creates an array with square root of each age

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare)

//todo Example 4 - Creates an array with square root of each age and then multiplies it by 2

const agesSquareTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2)
console.log(agesSquareTimesTwo)


//? sort() - Can organize array items by alphabetical or chronological order. This can be switched between ascending and descending order.

//todo Example 1 - Sorts companies by start date

// ES5 Version
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// ES6 Version
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies)

//todo Example 2 - Sorts ages in order

const sortAgesAscending = ages.sort((a, b) => a - b)
console.log(sortAgesAscending)

const sortAgesDescending = ages.sort((a, b) => b - a)
console.log(sortAgesDescending)


//? reduce() - Executes the callback once for each assigned value present in the array. It can be used to: Get the sum of all values in the array, sum of values in an object array, flatten an array of arrays, count instances of values in an object, group objects by a property, bond arrays contained within an array of objects using the spread operator(...) and initialValue, remove duplicate items in an array, can be used to replace .filter().map() items in an array.

//todo Example 1 - Gets the sum of all ages

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0)

console.log(ageSum);

//todo Example 2 - Gets total years for all companies

// ES5 Version
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// ES6 Version
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears)


//* Combining Higher Order Functions

const combined = ages 
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined)