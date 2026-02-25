
const geocast = (name, Url, key, callback) => {
    if(!name) return callback("please enter region name", undefined)
    const url = `${Url}key=${key}&q=${name}`;
    (async function () {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.error) {
                callback(data.error.message, undefined);
            } else if (!data) {
                callback("Did not find any data about this region", undefined);
            } else {
                callback(undefined, { lat: data.location.lat, long: data.location.lon });
            }
        } catch (error) {
            callback("unable to conect to weather api service", undefined)
        }
    }
    )();
};
module.exports = { geocast };
