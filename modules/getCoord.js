const request = require('request');

function getCoord(res,city,callback) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city 
    )}.json?access_token=${process.env.MAPBOX}`
    // request({url:url,json: true}, callback(error,succesful_response))


    request({ url: url, json: true }, (error,{body}) => {
        if(error) {
            console.log(error)
            return res.render("weather", {error: "something went wrong while fetching your location"})
        }

        console.log(body)
        //else
        if(body.features && body.features.length === 0){
            return res.render("weather", {error: "we cannot find your location"})
        }
        const [lng, lat] = body.features[0].geometry.coordinates

        callback(res,lng,lat)
    })
}

module.exports = getCoord; 