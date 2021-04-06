//* Promises

// let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=5")
// .then() is a way to resolve promises. Whenever you can use this then the object to the left is "Thenable"
// .then((responseWeGetBack) => responseWeGetBack.json())
// .then(data => console.log(data))
// If the promise is rejected then the .catch() method is used.
// .catch(console.log("ERROR"))
// console.log(response);


const fetchPokemon = async () => {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=5")
  console.log(response);

  let convertResponse = await response.json()
}
fetchPokemon()