const request = require('request');

function getCoord(city) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city 
    )}.json?access_token=${process.env.MAPBOX}`
    request({ url: url, json: true }, (error,response )=>{
        if(error) return console.log(error)
        
        //else
        console.log(response)
    })

}

module.exports = getCoord;