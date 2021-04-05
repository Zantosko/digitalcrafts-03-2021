const API = "eed38ad6a02273431c1a13c74cf193f9"
const zipCode = document.querySelector(".zip");
const submitBtn = document.querySelector(".btn")
let card = document.querySelector(".card-2")


const getWeather = async () => {
  console.log(zipCode.value)
  const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},us&units=imperial&appid=${API}`)
  console.log(data)

  const convertToJSON = await data.json()
  console.log(convertToJSON)
  
  card.innerHTML = `
    <h1>${convertToJSON.name}</h1>
    <div class="grid">
      <div class="grid-left">
        <p>${convertToJSON.weather[0].description}</p>
        <p class="temp">${convertToJSON.main.temp} &degF</p>
      </div>
      <div class="grid-right">
        <img src="http://openweathermap.org/img/w/${convertToJSON.weather[0].icon}.png">
      </div>
    </div>
  `
  card.style.visibility = "visible"
}

submitBtn.addEventListener("click", getWeather)