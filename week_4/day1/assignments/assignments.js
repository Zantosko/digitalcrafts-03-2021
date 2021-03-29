/*
?Javascript exercises

- Define Variables
- define an array in javascript
- define an object in javascript
- define an integer
- define a string
- re-assign the string you defined above to "This is a new string"
- create a new variable that takes your integer above and multiplies it by 5

- Create an array that has the following in it
  ["swag", 123123, true, false, "boolean"]

  print out 123123
  print out false
  print out boolean
  bonus: print out the length of the array

  -Create an object that has the following structure
  name: "name",
  age: 20,
  height: 7.1,
  metric: "ft"

  - You will create 5 objects with unique names, with unique ages, height.
  - Print out the first objects name
  - Print out the last objects age
  - print out the 3rd objects height
  - change the 3rd objects height to be 1.2
  - change the 3rd objects metric to be "meters"
  - create a new key on the 2nd object called sport. Assign it your favorite sport
*/

//* Part 1
var variable = "Zach";
let letVar = true;
const constant = 24;

let arr = ["Zachary", {key:"value"}, 48, false, ["Small list"]]

let obj = {
  name: "Zach",
  address: "Houston, TX",
}

const int = 112;

let string = "string";

string = "This is a new string";

const product = int * 5;
console.log(product);


//* Part 2
let arr2 = ["swag", 123123, true, false, "boolean"];
console.log(arr2[1]);
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2.length);

//* Part 3
let obj2 = {
  zach: {
    name: "Zach",
    age: 24,
    height: 6.0,
    metric: "ft"
  },
  ryan: {
    name: "Ryan",
    age: 30,
    height: 5.8,
    metric: "ft"
  },
  sam: {
    name: "Sam",
    age: 24,
    height: 5.11,
    metric: "ft"
  },
  matte: {
    name: "Matte",
    age: 22,
    height: 6.2,
    metric: "ft"
  },
  mitch: {
    name: "Mitch",
    age: 30,
    height: 6.2,
    metric: "ft"
  }
}

console.log(obj2.zach.name);

console.log(obj2.mitch.age);

console.log(obj2.sam.height);
obj2.sam.height = 1.2;
console.log(obj2.sam.height);
obj2.sam.metric = "meters";
console.log(obj2.sam.metric);

obj2.ryan.favoriteSport = "MMA";
console.log(obj2.ryan.favoriteSport);