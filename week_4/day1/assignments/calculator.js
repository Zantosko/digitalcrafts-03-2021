// const input1 = parseInt(prompt("Please enter a number"));
// numberValidation()
// const operation = prompt("Please select an acceptable operator (+, -, *, /)")
// const input2 = parseInt(prompt("Please enter another number"));


function calculate(operation, num1, num2) {
  if (operation === "add") {
    solution = num1 + num2;
    return console.log(solution);
  } else if (operation === "subtract") {
    solution = num1 - num2;
    return console.log(solution);
  } else if (operation === "multiply") {
    solution = num1 * num2;
    return console.log(solution);
  } else if (operation === "divide") {
    solution = num1 / num2;
    return console.log(solution);
  } else {
    return alert("Please use a valid operator!!");
  }

}

calculate("multiply", 5, 12)

