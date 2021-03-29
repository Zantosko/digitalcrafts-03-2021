//* Python Syntax
// hello = "Hello World";
// integer = 3;
// boolean = false;

// def add(num1, num2):
//   return num1 + num2;

// while (pizza < 8):
//   print("pizza")

// for slice in pizza:
//   print(slice)

//* JavaScript Syntax
// Define a variable

//? Old way
// var => variable (Not used anymore)
//? New way (ES6)
// let (Can be reassigned)
// const => constant (Cannot reassign it)

// var has a function scope
var hello = "Hello World";
// let and const have block scope ()
let integer = 3;
const boolean = false;


// Fucntions
// Old syntax for functions
function sumNumbers(num1, num2) {
  // function body, aka inside the curly braces
  
  // for loop syntax
  // for (first arg: variable we define, we initialize to 0)
  // for (second arg: our loop condition, is your loop container)
  // for (third arg: incrementer)
  let number = 9;
  let array = [1, 2, 3];

  // Closure
  // This is an example of lexical scope because it still has access to variables outside of its scope (lexical environment).
  function insideFunction() {
    console.log(number);
  }
  for (let loopNumber = 0; loopNumber < array.length; loopNumber++) {
    
    // does stuff here
    console.log(loopNumber);
  }
  console.log(number);
  return num1 + num2;
}
console.log(`The sum of the numbers is: ${sumNumbers(2, 3)}`);

// Arrays (Lists in Python)
// Use let not var!
let list = [1, 2, 3];
let namesInArray = [
  "Zach",
  "Carlo",
  "Patrick",
  "Randy",
]
// Accessing items in arrays list[item-index]
list[0];
// This will print Zach
console.log(namesInArray[0]);

// Objects (Dictionaries in Python)
// When you write key/value pairs, the key can only be a variable. The value can be any JS type.
let object = {key:"value"};

// Accessing items in Objects
let namesInObject = {
  name: "Zach"
}
// You reference values in objects using Dot Notation
console.log(namesInObject.name)

// Using multiple names requires the use of name objects nested inside of a parent object. (This example is over-written)
let complexObject = {
  jessica: {
    name: "jessica"
  },
  whitney: {
    name: "whitney"
  },
  joey: {
    name: "joey"
  },
  michael: {
    name: "michael"
    // hometown: "Houston"
  }
}
// Objects in JS are accessed by key/values using dot notation. Dot notation can also create new key values on the fly.

console.log(complexObject.michael.name);
complexObject.michael.hometown = "not houston";
// This now exists since we created it on the previous line
console.log(complexObject.michael.hometown);