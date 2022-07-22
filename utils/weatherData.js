const request = require('request');
const constants = require('../config');

const weatherData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
    request({url, json:true},(error,{body})=>{
        if(error) {
            callback("Can't fetch data from open weather map api. ",undefined)
        }else if(!body.main || !body.name){
            callback(undefined, {
                temperature: " ",
                mintemp: " ",
                maxtemp: " ",
                description: " ",
                cityName: " ",
                country: " "
            })
        }else {
            callback(undefined, {
                temperature: body.main.temp,
                mintemp: body.main.temp_min,
                maxtemp: body.main.temp_max,
                description: body.weather[0].description,
                cityName: body.name,
                country: body.sys.country
            })
        }
    })
}

module.exports = weatherData;