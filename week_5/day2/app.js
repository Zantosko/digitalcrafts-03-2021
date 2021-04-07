//* Promises

// let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=5")
// .then() is a way to resolve promises. Whenever you can use this then the object to the left is "Thenable"
// .then((responseWeGetBack) => responseWeGetBack.json())
// .then(data => console.log(data))
// If the promise is rejected then the .catch() method is used.
// .catch(console.log("ERROR"))
// console.log(response);


const fetchPokemon = async () => {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=151")
  console.log(response);

  let convertResponse = await response.json()
  console.log(convertResponse)

  const nameOfPokemon = document.querySelector(".pokemon")
  const div = document.createElement("div")
  let counter = 1;
  for (let pokemon of convertResponse.results) {
    const h3 = document.createElement("h3")
    const img = document.createElement("img")
    img.height = "100";
    img.width = "100";
    img.src = `https://pokeres.bastionbot.org/images/pokemon/${counter}.png`
    h3.append(pokemon.name)
    div.append(h3, img)
    nameOfPokemon.append(div)
    counter += 1
  }
}

const submit = document.querySelector("button")
submit.addEventListener("click", fetchPokemon)
