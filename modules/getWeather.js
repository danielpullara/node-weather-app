const request = require('request');

function getWeather(res,lng, lat) {
    const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY}/${lat},${lng}`
    request({ url: url, json: true }, (error, { body }) => {
        if(error) {
            console.log(error)
            return res.render("weather", {error: "something went wrong while fetching the weather"})
        }
        const temp= body.currently.temperature
         return res.render("weather", {
            temp:temp
        })
    })
}

module.exports = getWeather;