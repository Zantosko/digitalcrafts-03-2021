//* String Interpolation

//Python Syntax
// print(f"blah blah {var-name}")

// JS Syntax
let height = "6ft"
let weight = "220 lbs"

// Method 1
console.log("Zach's height is " + height + " and he weighs " + weight);

// Method 2 (Perferred Way!)
let zachDimensions = `Zach's height is ${height} and he weighs ${weight}`;
console.log(zachDimensions);

//* Types

// JS is a loose language so a string can be many things
let string = "string";
let string2 = 'string';
let string3 = `string`;
let integer = 2;

// Using "type of" is very useful for checking what JS type your variable is.
console.log(typeof integer);

// In JS everything is an object.

// Don't use floats in JS


//* New for-loops

//? For..in
// The for..in loop is for Objects
// const is used because the variable doesn't change
const collectionOfPizzas = {
  firstPizza: {
    crust:"thin",
    toppings:[
      "cheese", 
      "pepperoni", 
      "spinach", 
      "onion", 
      "anchovies", 
      "feta", 
      "seaweed", 
      "cream cheese", 
      "mushrooms", 
      "pineapple"
    ]
  }
}

// for in loop, iterates over an object, returns the keys as strings
for(const pizza in collectionOfPizzas) {
  // This will print out key names as strings
  console.log(pizza)
}

let firstPizza = {
  crust:"thin",
  toppings:[
    "cheese", "pepperoni", "spinach", "onion", "anchovies", "feta", "seaweed", "cream cheese", "mushrooms", "pineapple"
  ]
}

// Prints out values in in firstPizza
for(const pizzaType in firstPizza) {
  console.log(firstPizza[pizzaType])
}

// Prints out Object keys as an Array
console.log(Object.keys(firstPizza))

// The benefit of a for..in loop is that it doesn't create an additional array when you order your data

// Typically you will always use const over let. This is because you don't usually want to mutate data. You want data to be immutable.


//? For..of
// The for..of loop is for Arrays
let cars = ["Subaru", "Audi", "Honda", "BMW"]

// This will print all cars in the list
for(const car of cars) {
  console.log(`This is a ${car}`)
}

// This will access Audi
console.log(cars[1])

// Accessing Array items inside of an object
for(const topping of firstPizza.toppings) {
  console.log(topping)
}


//* While loops
// They aren't really used much in JS because they crash your computer

// while (condition) {
//   do stuff here
// }


//* If..else statements
// if (condition) {
  
// } else if {

// }else {
  
// }

let age = 5 
if(age < 5) {
  console.log("Too young")
} else {
  console.log("You're getting old")
}

// if else statements
myHeight = 7;
if (height < 4) {
  console.log("Play point guard");
} else if (height < 6 && height > 5.5) {
  console.log("Bench");
} else {
  console.log("Center");
}

