const key = "ab33b11a44ef4d1ab59152018262102";
const Url = 'http://api.weatherapi.com/v1/current.json?'
const geocast = async (q) => {
    const url = `${Url}key=${key}&q=${q}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.error) {
                return {
                    message: data.error.message,
                    ok: false,
                }
            } else if (!data) {
                return {
                    message: "Did not find any data about this region",
                    ok: false,
                }
            } else {
                return {
                    data: {
                        country: data.location.country,
                        temp: data.current.temp_c + "°C",
                        lat: data.location.lat,
                        long: data.location.lon,
                        condation: data.current.condition.text
                    },
                    ok: true
                }
            }
        } catch (error) {
            return {
                message: "unable to conect to weather api service",
                ok: false,
            }
        }
    };
module.exports = { geocast };
