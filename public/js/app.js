console.log('Client side javascript file is loaded')

// function showPosition(position) {
//     console.log(position.address.city)
//     // console.log("Latitude: " + position.coords.latitude +
//     // "  Longitude: " + position.coords.longitude)
//   }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition)
//         // navigator.geolocation.getCurrentPosition((position) => {
//         //     console.log(position.longitude)
//         //     console.log(position.latitude)
//         // })
        
//     } else {
//         console.log("Geolocation is not supported by this browser.")
//     }
// }

// getLocation()

const weatherForm = document.querySelector('#frmWeather')
const inputLocation = weatherForm.querySelector('input')
inputLocation.focus()

const contentMessage = document.querySelector('#msgContent')
const forecastMessage = document.querySelector('#msgForecast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = inputLocation.value

    if (location) {
        // console.log(location)

        fetch(`http://localhost:3000/weather?address=${location}`).then( (response) => {
            response.json().then( (data) => {
                if (data.error) {
                    contentMessage.textContent = data.error
                    forecastMessage.textContent = ''
                }
                else {
                    contentMessage.textContent = data.location
                    forecastMessage.textContent = `The temperature is ${data.temperature}°F and there is a ${data.precipProbability}% chance of rain.`
                    // console.log(data.location)
                    // console.log(data.temperature)
                    // console.log(data.precipProbability)
                }
            })
        })
    }
})