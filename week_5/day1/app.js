//* Asynchronous Programming
// Asynchrounous functions occur indepently of of normal brower behavior. You want to wait for certain pieces of information so logic is sent in the right order.
// console.log("Grabbing user info") // 1st
// console.log("Grabbing user address") // 2nd
// setTimeout(function, 3000)
// setTimeout(() => console.log("writing in the letter body"), 3000) // 4th
// console.log("mail a letter to user") // 3rd


//? XML HTTP Request
const request = new XMLHttpRequest()
// console.log(request)

request.onreadystatechange = function() {
  // The "this" keyword references the object that has ownership over it.
  console.log("console.log this ",this)
  // console.log(this.status)
  // console.log(this.response)
  // console.log(this.responseURL)

  // Making an XML HTTP Request from an API
  // Fetch elimintes the need for all of this code
  const response = JSON.parse(this.responseText)
  const img = document.createElement("img")
  img.src = response.sprites.front_default
  console.log(img)
  const div = document.querySelector(".root")
  div.append(img)
  console.log(response)
}

// open takes in two arguments, HTTP Method and the URL or location of what you want to get(file path)
request.open("GET", "https://pokeapi.co/api/v2/pokemon/9");
request.send();