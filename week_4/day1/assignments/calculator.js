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

