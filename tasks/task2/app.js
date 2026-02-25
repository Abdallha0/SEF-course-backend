const { forcast } = require("./forcast");
const { geocast } = require("./geocast");

const region = process.argv[2];
const key = "ab33b11a44ef4d1ab59152018262102";
const url = 'http://api.weatherapi.com/v1/current.json?'

geocast(region, url, key, (error, data) => {
    if (error) return console.log("-------------------------------\n" + error)
    forcast(data.lat, data.long, url, key, (error, data) => {
        if (error) return console.log("-------------------------------\n" + error)
        const shownData = [`Region: ${data.location.name} ( ${data.location.country} )`, `Tempereture: ${data.current.temp_c}C`, `Latitude: ${data.location.lat}`, `Longitude: ${data.location.lon}`]
        console.log("-------------------------------")
        shownData.forEach(i => console.log(i))
    })
})

