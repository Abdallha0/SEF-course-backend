// 1. npm i axios
const axios = require("axios");

//2. go to weatherapi.com to get api data

const key = "ab33b11a44ef4d1ab59152018262102";
const region = "egypt"
const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}`;

async function getData() {
    try {
        const res = await axios.get(url);
        const data = res.data
        if (!data) {
            console.log("ERROR HAS OCCURRED")
        } else if (data.error) {
            console.log(data.error.message)
        } else {
            console.log(`Weather in ${data.location.name} is ${data.current.condition.text}`)
        }
    } catch (error) {
        console.log(error.message || "internal server error")
    }
}

getData()

// if proplem in host url return error called (low level error)
