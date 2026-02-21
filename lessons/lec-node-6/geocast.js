
const geocast = (name, key, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${name}`;

    (async function () {
        try {
            const res = await fetch(url);
            const data = await res.json()
            if (data.error) {
                callback(data.error.message, undefined);
            } else if (!data) {
                callback("unable to conect to weather api service", undefined);
            } else {
                callback(undefined, { lat: data.location.lat, long: data.location.lon });
            }
        } catch (error) {
            callback(error.message || "internal server error", undefined)
        }
    }
    )();
};
module.exports = { geocast };
