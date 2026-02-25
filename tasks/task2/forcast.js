const axios = require("axios")

const forcast = (lat, long, Url, key, callback) => {
    const url = `${Url}key=${key}&q=${lat},${long}`;
    (async function () {
        try {
            const res = await axios.get(url);
            if (res.data.error) {
                callback(res.data.error.message, undefined);
            } else if (!res.data) {
                callback('Did not find any data about this region', undefined);
            } else {
                callback(undefined, res.data);
            }
        } catch (error) {
            callback("unable to conect to weather api service", undefined)
        }
    }
    )();
};

module.exports = { forcast }