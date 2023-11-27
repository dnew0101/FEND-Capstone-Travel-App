const dotenv = require('dotenv');
dotenv.config();
let path = require('path');
const port = 8500;
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const request = require('request');

const app = express();

//middleware--
app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//APIS
//GeoNames Username variable
// const username = process.env.USER_NAME;
//had to toss the GeoNames API due to their API having a syncing issue with my account
//OpenCage API
const OPEN_CAGE_API = process.env.OPEN_CAGE_API;

//WeatherBit API key
const OPEN_WEATHER_KEY = process.env.OPEN_WEATHER_KEY;

//Pixabay API key
const PIX_API_KEY = process.env.PIX_API_KEY;

//SABRE API key
const AVIATION_API_KEY = process.env.AVIATION_API_KEY;
//routes
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

//geoname route
app.post('/geo', async (req, res) => {
    let destination = req.body.destination;
    let geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${destination}&key=${OPEN_CAGE_API}`;
    const geoData = await fetch(geoUrl);
    const jsonGeoData = await geoData.json();
    res.send(jsonGeoData);
});
//weatherbit route
app.post('/wbit', async (req, res) => {
    const baseUrl = "https://history.openweathermap.org/data/2.5/history/city?";
    let lat = req.body.lat;
    let lon = req.body.lon;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let weatherUrl = `${baseUrl}lat=${lat}&lon=${lon}&type=hour&start=${start_date}&end=${end_date}&units=imperial&appid=${OPEN_WEATHER_KEY}`;
    const weatherData = await fetch(weatherUrl);
    const jsonWeatherData = await weatherData.json();
    res.send(jsonWeatherData);
});
//pixabay route
app.post('/photo', async (req, res) => {
    const pixBaseUrl = "https://pixabay.com/api/";
    let location = req.body.location;
    let isCloudy = req.body.isCloudy;
    let pixUrl = `${pixBaseUrl}?key=${PIX_API_KEY}&q=${isCloudy}+${location}&image_type=photo&pretty=true`
    const photoData = await fetch(pixUrl);
    const jsonPhotoData = await photoData.json();
    res.send(jsonPhotoData);
})

//listening
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
})

module.exports = app;