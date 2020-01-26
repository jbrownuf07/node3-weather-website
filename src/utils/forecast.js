const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/ed1d031a3733dcaf89cdc7ce8f8bc945/${latitude},${longitude}`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather forecast service. Please check your connectivity.', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find location. Please check your coordinates and try again.', undefined)
        }
        else {
            callback(undefined, response.body.currently)
        }
    })
};

module.exports = forecast