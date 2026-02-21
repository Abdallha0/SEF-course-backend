const { forcast } = require("./forcast");
const { geocast } = require("./geocast");

const region = process.argv[2];
const key = "ab33b11a44ef4d1ab59152018262102";

geocast(region, key, (error, data) => {
    if (error) { console.log(error); return; }
    forcast(data.lat, data.long, key, (error, data) => {
        console.log("ERROR => " + error)
        console.log(`The weather in ${data.location.name} (${data.location.country}) is ${data.current.condition.text}`)
    })
})

