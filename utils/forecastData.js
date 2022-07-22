const request = require('request');
const constants = require('../configData');

const forecastData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Can't fetch data from open weather map api. ", undefined)
        } else if (!body.list || !body.city.name) {
            callback(undefined, {
                temperature1:" ",
                mintemp1: " ",
                maxtemp1: " ",
                description1: " ",
                cityName1: " ",
                country1: " ",

                temperature2: " ",
                mintemp2: " ",
                maxtemp2: " ",
                description2: " ",
                cityName2: " ",
                country2: " ",

                temperature3: " ",
                mintemp3: " ",
                maxtemp3: " ",
                description3: " ",
                cityName3: " ",
                country3: " ",

                temperature4: " ",
                mintemp4: " ",
                maxtemp4: " ",
                description4: " ",
                cityName4: " ",
                country4: " ",

                temperature5: " ",
                mintemp5: " ",
                maxtemp5: " ",
                description5: " ",
                cityName5: " ",
                country5: " "
            })
        } else {
            callback(undefined, {
                temperature1: body.list[9].main.temp,
                mintemp1: body.list[9].main.temp_min,
                maxtemp1: body.list[9].main.temp_max,
                description1: body.list[9].weather[0].description,
                cityName1: body.city.name,
                country1: body.city.country,

                temperature2: body.list[17].main.temp,
                mintemp2: body.list[17].main.temp_min,
                maxtemp2: body.list[17].main.temp_max,
                description2: body.list[17].weather[0].description,
                cityName2: body.city.name,
                country2: body.city.country,

                temperature3: body.list[25].main.temp,
                mintemp3: body.list[25].main.temp_min,
                maxtemp3: body.list[25].main.temp_max,
                description3: body.list[25].weather[0].description,
                cityName3: body.city.name,
                country3: body.city.country,

                temperature4: body.list[33].main.temp,
                mintemp4: body.list[33].main.temp_min,
                maxtemp4: body.list[33].main.temp_max,
                description4: body.list[33].weather[0].description,
                cityName4: body.city.name,
                country4: body.city.country,

                temperature5: body.list[39].main.temp,
                mintemp5: body.list[39].main.temp_min,
                maxtemp5: body.list[39].main.temp_max,
                description5: body.list[39].weather[0].description,
                cityName5: body.city.name,
                country5: body.city.country
            })
        }
    })
}

module.exports = forecastData;