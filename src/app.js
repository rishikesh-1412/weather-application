const express = require('express');
const hbs = require('hbs'); 
const path = require('path');
const app = express();

const weatherData = require('../utils/weatherData');
const forecastData = require('../utils/forecastData');

const port = process.env.PORT || 3000; 

const publicStaticDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather Application'
    })
})

app.get('/pune', (req, res) => {
    res.render('pune', {
        //title: 'Weather Application'
    })
})

app.get('/mumbai', (req, res) => {
    res.render('mumbai', {
        //title: 'Weather Application'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        //title: 'Weather Application'
    })
})

app.get('/forecasting', (req, res) => {
    res.render('forecast', {
        //title: 'Weather Application'
    })
})

app.get('/weather',(req,res)=>{
    const address = req.query.address
    if(!address){
        res.send({
            error:"You must enter city first."
        })
    }

    weatherData(address, (error, { temperature,mintemp,maxtemp,description,cityName,country}={}) => {
        if(error) {
            res.send({
                error
            })
        }
    
        //console.log(temperature, mintemp, maxtemp, description, cityName,country);
        res.send({
            temperature,
            mintemp,
            maxtemp,
            description,
            cityName,
            country
        })
    })
})

app.get('/forecast', (req,res) => {
    const add = req.query.address
    if (!add) {
        res.send({
            error: "You must enter city first."
        })
    }

    forecastData(add, (error, { temperature1, mintemp1, maxtemp1, description1, cityName1, country1, temperature2, mintemp2, maxtemp2, description2, cityName2, country2, temperature3, mintemp3, maxtemp3, description3, cityName3, country3, temperature4, mintemp4, maxtemp4, description4, cityName4, country4, temperature5, mintemp5, maxtemp5, description5, cityName5, country5} = {}) => {
        if (error) {
            res.send({
                error
            })
        }

        //console.log(temperature, mintemp, maxtemp, description, cityName,country);
        res.send({
            temperature1,
            mintemp1,
            maxtemp1,
            description1,
            cityName1,
            country1,

            temperature2,
            mintemp2,
            maxtemp2,
            description2,
            cityName2,
            country2,

            temperature3,
            mintemp3,
            maxtemp3,
            description3,
            cityName3,
            country3,

            temperature4,
            mintemp4,
            maxtemp4,
            description4,
            cityName4,
            country4,

            temperature5,
            mintemp5,
            maxtemp5,
            description5,
            cityName5,
            country5
        })
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:"Page not found."
    });
});

app.listen(port,()=>{
    console.log("Server is on and running on port : ",port);
});