// Select elements by their id
// const heading = document.getElementById("main-header");
const list = document.getElementById("list");

// console.log(heading)
// console.log(list)

// Select elements by their class name
const listItem = document.getElementsByClassName("list-item")
// console.log(listItem)

// Select elements by their tag name
// const liItems = document.getElementsByTagName("li");
// console.log(liItems)

// Selecting every instance of this class name
const lastListItem = document.querySelectorAll(".list-item1");
// console.log(lastListItem)

// Iterates over Node List
// lastListItem.forEach((item) => {
//   console.log(item)
// })

// HTML Collection is comprised of only elements but it doesn't take into account text and white space like a Node List. This is the reason why you can't iterate over an HTML Collection with the forEach() method.

// Modifying the value of the HTML element. This doesn't return an error, because you're not reassigning the constant. HTML elements are essentially objects so you can modify values with no issue.
const heading = document.getElementById("main-header");
heading.innerText = "He is how old?"

heading.style.color = "seagreen"

const newListItem = document.createElement("li");
newListItem.innerText = "Returns"

/** Target your element
 * you will grab the element to view it
 * you will create a new element and insert it into that html
 */

// Function that creates a new Div
function addDiv() {
  const newDiv = document.createElement("div");
  console.log(newDiv);
  const newInput = document.createElement("input");
  newDiv.append(newInput);
  console.log(newInput);
  const root = document.getElementById("root");
  console.log(root);
  root.append(newDiv);
}
addDiv()



