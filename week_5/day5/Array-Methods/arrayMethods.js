// styling for console logs
const color = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const logStyle = `font-family:system-ui;font-size:1rem;color: #${randomColor};`;

  return logStyle;
};

//? .map
// This method creates a new array, and allows you to do something to each element in the array
// This method is good for when you want to return values after you mutate them. One of the most used methods.
const array1 = ["Joey", "Zach", "Tyler", "Christian"];
const mappedArray1 = array1.map((name) => name + " " + "developer");
console.log(`%cMapped Array`, `${color()}`, mappedArray1);

//? .filter
// This method lets you return a new array, and fills that new array with only the elements that match what you specify (aka, the new array is filtered to only include)
// This is like an if-statement for arrays
const array2 = ["Joey", "Zach", "Tyler", "Christian"];
const filteredArray2 = array2.filter((element) => element === "Zach");
console.log(`%cFiltered Array`, `${color()}`, filteredArray2);

//? .sort
// This method will sort an arrays elements in ascending or descending order

const array3 = ["Joey", "Zach", "Tyler", "Christian"];
const array4 = ["Joey", "Zach", "Tyler", "Christian"];
// ascending
const sortedArray3 = array3.sort((a, b) => (a > b ? 1 : -1));
// descending
const sortedArray4 = array4.sort((a, b) => (a > b ? -1 : 1));
console.log(`%cSorted Array`, `${color()}`, sortedArray3);
console.log(`%cSorted Array`, `${color()}`, sortedArray4);

//? .includes
// This methods checks if the array includes the elements that pass the condition. It only returns true or false.

const array5 = ["Joey", "Zach", "Tyler", "Christian"];
console.log(`%cInclude in the Array`, `${color()}`, array5.includes("Joey"));
console.log(`%cInclude in the Array`, `${color()}`, array5.includes("Joe"));

//? .reduce
// This method applies some desired effect against an accumulator (aka, the total amount of the elements it's applied the effect to, and reduces it to a single effect).
const array6 = [1, 2, 3, 4, 5, 6, 2020];
const reducedArray = array6.reduce(
  (total, currentElement) => total + currentElement
);
console.log(`%cReduced Array`, `${color()}`, reducedArray);

//? .find
// This method finds and returns the first element value that matches or passes your test
const array7 = [1, 2, 3, 4, 5, 6, 2020];
const foundYou = array7.find((element) => element > 200);
console.log(`%cFind Array`, `${color()}`, foundYou);

//? .findIndex
// Similar to find, this just finds the first element that passes your condition and lets you know what index it is.
const array8 = [1, 2, 3, 4, 5, 6, 2020];
const foundIndex = array8.findIndex((element) => element === 4);
console.log(`%cFind Array`, `${color()}`, foundIndex);

//? .slice
// Slice returns a new array with the elements in the range you specify to slice on (aka, you say slice from here to here and it returns you the values in that range in a new array)
// This does not mutate the original array

const array9 = [1, 2, 3, 4, 5, 6, 2020];
const slicedArray = array9.slice(2, 5);
console.log(`%cSliced Array`, `${color()}`, slicedArray);
console.log(`%cOriginal Array`, `${color()}`, array9);

//? .splice
// Splicing mutates the array you are splicing, and will add or remove or replace elements in the array
// .splice(startingPosition, deleteCount, item you want to add or delete or replace )

const array10 = [1, 2, 3, 4, 5, 6, 2020];
const splicedArray = array10.splice(2);
console.log(`%cSpliced Array`, `${color()}`, splicedArray);
console.log(`%cOriginal Array`, `${color()}`, array10);