let input = document.querySelector(".input");
const button = document.querySelector(".button");
const paragraph = document.querySelector(".displayNumber")

button.addEventListener("click", () => {
  console.log(input.value)
})


// .value can be used to grab the value currently residing inside the element

// event handlers can be put on certain html elements
// they will trigger, when an event happens