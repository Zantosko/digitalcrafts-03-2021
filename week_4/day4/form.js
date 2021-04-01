const form = document.querySelector("#form");

const validateName = (name) => {
  // console.log(`Your name is ${name}`);

  myRegex = /[A-Za-z]+/;
  return myRegex.test(name);
}

form.addEventListener("submit", (e) => {
  const input = document.querySelector(".text-input");

  // Putting "!" before any statement in an if statement is like saying "condition === false"
  if (!validateName(input.value)) {
    e.preventDefault();
    alert("Invalid Input");
  } 
})

const zach = 1
validateName(zach)

// form.addEventListener("submit", validateName(form.value))