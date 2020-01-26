const request = require('request')
const chalk = require('chalk')

const geoCode = (address, callback) => {
    const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiamJyb3dudWYwNyIsImEiOiJjazVxZXhqZnkwMXE0M3Fxd3JteGJiYnVyIn0.9n6YX56zDyN53J1YVwUkvQ&limit=1`
    
    request({url: geoUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try searching a different loaction', undefined)
        }
        else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const location = response.body.features[0].place_name
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

module.exports = geoCode