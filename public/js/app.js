console.log('Client side javascript file is loaded')

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

        fetch(`/weather?address=${location}`).then( (response) => {
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