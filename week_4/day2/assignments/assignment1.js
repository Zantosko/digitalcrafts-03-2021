//? Method 1
const container = document.querySelector(".main-container");

container.innerHTML = `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>
  <label for="choice">Yes</label>
  <input type="radio" name="choice">
  <label for="choice">No</label>
  <input type="radio" name="choice">
  <br>
  <br>
`

//? Method 2
// Get body
const root = document.getElementById("root")

// Create new div
const container2 = document.createElement("div");
container2.classList.add("main-container2");

// Create new ul
const ul = document.createElement("ul")

// Array of list item text
const liText = ["item6", "item7", "item8", "item9", "item10"];
let list = liText.forEach((item) => {
  let li = document.createElement("li")
  li.innerHTML = item;
  ul.append(li)
})

const label1 = document.createElement("label");
label1.innerHTML = "yes"
label1.setAttribute("for", "c2")

const input1 = document.createElement("input");
input1.setAttribute("type", "radio");
input1.setAttribute("name", "c2")

const label2 = document.createElement("label");
label2.innerHTML = "no"
label2.setAttribute("for", "c2")

const input2 = document.createElement("input");
input2.setAttribute("type", "radio");
input2.setAttribute("name", "c2")

container2.append(ul);
container2.append(label1)
container2.append(input1);
container2.append(label2)
container2.append(input2);
root.append(container2);






