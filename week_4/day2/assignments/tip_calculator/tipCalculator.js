const bill = document.querySelector(".bill");
const tip = document.querySelector(".tip");
const calcButton = document.querySelector(".button");
const tipContainer = document.querySelector(".amount-container");
const tipHistory = document.querySelector(".history");

const ul = document.createElement("ul");

const calculation = () => {
  let billAmount = bill.value;
  let tipPercentage = tip.value;

  if (!validate(billAmount) || !validate(tipPercentage)) {
    alert("Please input numbers only!!");
    location.reload();

  } else {
    let tipAmount = Number(billAmount) * (Number(tipPercentage) / 100);

    let totalBill = tipAmount + Number(billAmount);
    tipContainer.innerHTML = totalBill.toFixed(2);

    const li = document.createElement("li");
    li.append(totalBill.toFixed(2));
    ul.append(li);
    tipHistory.append(ul);
  }
}

const validate = (input) => {
  myRegex = /(\d+(?:\.\d+)?)/;
  return myRegex.test(input)
}

calcButton.addEventListener("click", calculation)