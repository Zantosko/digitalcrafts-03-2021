$(document).ready(() => {
  console.log("JQuery Initialized")
});

const divContainer = document.querySelector("div");
console.log(typeof divContainer);
const $jdivContainer = $("<div></div>");

const $header3 = $("<h3>", {
  text: "Zach is here"
});
$header3.css("color", "red");

$jdivContainer.append($header3);
console.log(($jdivContainer));
$(document.body).append($jdivContainer);