const bill = document.querySelector(".bill");
const tip = document.querySelector(".tip");
const calcButton = document.querySelector(".button");
const tipContainer = document.querySelector(".amount-container");
const tipHistory = document.querySelector(".history");

const ul = document.createElement("ul");

calcButton.addEventListener("click", calculation)

function calculation() {
  if (isNaN(bill.value) || isNaN(tip.value)) {
    alert("Please input numbers only!!")
    location.reload()

  } else {

    let tipAmount = Number(bill.value) * (Number(tip.value) / 100);

    tipContainer.innerHTML = tipAmount.toFixed(2);

    const li = document.createElement("li");
    li.append(tipAmount.toFixed(2));
    ul.append(li);
    tipHistory.append(ul);
  } 
}