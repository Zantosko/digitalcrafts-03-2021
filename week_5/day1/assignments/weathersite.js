const API = "eed38ad6a02273431c1a13c74cf193f9"
const body = document.querySelector("body")
const zipCode = document.querySelector(".zip");
const submitBtn = document.querySelector(".btn")
let card = document.querySelector(".card-2")


let currentTime = new Date().getHours();
if (body) {
    if (7 <= currentTime && currentTime < 20) {
        body.setAttribute("class","day")
      }
      else {
        body.setAttribute("class","night")
        submitBtn.style.backgroundColor = "#C26DBC"
    }
}


const getWeather = async () => {
  if (zipCode.value.length !== 5) {
    alert("Invalid Entry! The entry must contain exactly 5 digits!")
    zipCode.value = "";
  } else {
      try {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},us&units=imperial&appid=${API}`)
      
        const convertToJSON = await data.json()
        
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
      } catch (err) {
        err = "Invalid Entry! The ZIP code entered does not exist!"
        alert(err)
        location.reload();
      }
  }
}

submitBtn.addEventListener("click", getWeather)

