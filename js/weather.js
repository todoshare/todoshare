function geoSuccess(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const API_KEY = "85a01b7fdca9150762edb5e1d216538a"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const name = data.name
    const weather = data.weather[0].main
    const weatherClass = document.querySelector('.weather')
    const locationClass = document.querySelector('.location')
    locationClass.innerText = name
    weatherClass.innerText = weather

  })
}

function geoError() {
  alert("can't find you. No weather for you")
}
navigator.geolocation.getCurrentPosition(geoSuccess, geoError)