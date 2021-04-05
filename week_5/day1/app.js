//* Asynchronous Programming
// Asynchrounous functions occur indepently of of normal brower behavior. You want to wait for certain pieces of information so logic is sent in the right order.
// console.log("Grabbing user info") // 1st
// console.log("Grabbing user address") // 2nd
// setTimeout(function, 3000)
// setTimeout(() => console.log("writing in the letter body"), 3000) // 4th
// console.log("mail a letter to user") // 3rd


//? XML HTTP Request
// const request = new XMLHttpRequest()
// console.log(request)

// request.onreadystatechange = function() {
  // The "this" keyword references the object that has ownership over it.
//   console.log("console.log this ",this)
  // console.log(this.status)
  // console.log(this.response)
  // console.log(this.responseURL)

  // Making an XML HTTP Request from an API
  // Fetch elimintes the need for all of this code
//   const response = JSON.parse(this.responseText)
//   const img = document.createElement("img")
//   img.src = response.sprites.front_default
//   console.log(img)
//   const div = document.querySelector(".root")
//   div.append(img)
//   console.log(response)
// }

// open takes in two arguments, HTTP Method and the URL or location of what you want to get(file path)
// request.open("GET", "https://pokeapi.co/api/v2/pokemon/9");
// request.send();


//? Fetch API using Promises
// fetch is an asynchronous method
// It does the GET method by default, but you can change this to use other HTTP methods
// Fetch is an API that is built into JS
// Converting data to JSON is asynchrounous

// fetching
// 1. Get the URL
// 2. We fetch(url).then(converst the response to JSON)
// 3. after we convert to json .then(data) we can do whatever with our data
// 4. now that we have the data we can access it and use it to create elements on the page
// const getPokemonData = () => {
  //* Fetching data section
//   const data = fetch("https://pokeapi.co/api/v2/pokemon/9")
  //* Promise section
//   .then(response => response.json())
//   .then(data => {
//     let name = document.createElement("h1")
//     name.innerHTML = data.name
//     let img = document.createElement("img")
//     let root = document.querySelector(".root")
//     img.src = data.sprites.front_default
//     root.append(img, name)
//   })
// }
// getPokemonData()


//? Async/Await (Most up to date method)
// Shortens the process even further.
const getPokemonData2 = async () => {
  //* Tells browser to wait for the fetch
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/9")
  
  //* Tells browser to wait until the data is converted to json
  const formattedJson = await data.json()
  console.log(formattedJson)
  let name = document.createElement("h1")
    name.innerHTML = formattedJson.name
    let img = document.createElement("img")
    let root = document.querySelector(".root")
    img.src = formattedJson.sprites.front_default
    root.append(img, name)
}
getPokemonData2()
