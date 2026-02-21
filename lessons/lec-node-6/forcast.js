const axios  = require("axios")

const forcast = (lat, long, key, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${long}`;

    (async function(){
        try {
            const res = await axios.get(url);

            if (res.data.error) {
                console.log("data.error")
                callback("unable to conect to weather api service", undefined);
            } else if (!res.data) {
                console.log("")
                callback(error.message, undefined);
            } else {
                callback(undefined, res.data);
            }
        } catch (error) {
            callback(error.message || "internal server error", undefined)
        }
    }
    )();
};

module.exports = { forcast }