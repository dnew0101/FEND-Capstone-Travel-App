import { fetchGeoData } from "./fetchGeo";
import { fetchWeatherData } from "./fetchWeather";
import { bubbleSort } from "./bubbleSort";
import { dateChecker } from "./isValidEntry";
import { fetchPhotoData } from "./fetchPhoto";

async function handleSubmit() {
    let destination = document.getElementById('to').value;
    let hometown = document.getElementById('from').value;
    let departureDate = document.getElementById('departureDate').value;
    let returnDate = document.getElementById('returnDate').value;
    if(dateChecker(departureDate) && dateChecker(returnDate)) {
        console.log(destination, hometown, departureDate, returnDate);
        //fetches latitude and longitude based on destination
        let newGeoData = await fetchGeoData('/geo', {destination: destination});
        console.log(newGeoData);
        console.log(newGeoData.results[0].geometry.lat);
        let newWeatherData = await fetchWeatherData('/wbit', {
            lat: newGeoData.results[0].geometry.lat,
            lon: newGeoData.results[0].geometry.lng,
            start_date: departureDate,
            end_date: returnDate});
        console.log(newWeatherData);
        //TODO: continue this string with the Pixabay API; use keywords to search
        let cloudData;
        if (newWeatherData.data[0].clouds > 40) {
            cloudData = "cloudy";
        } else {
            cloudData = "sunny";
        }
        let newPhotoData = await fetchPhotoData('/photo', {
            upperTemp: parseData(newWeatherData)[newWeatherData.data.length-1],
            lowerTemp: parseData(newWeatherData)[0],
            isCloudy: cloudData,
            location: destination});
        console.log(newPhotoData);
        let photoLink = newPhotoData.hits[0].pageURL;
    }
}

const parseData = function (newWeatherData) {
    let arr = new Array();
    for(let i = 0; i < newWeatherData.data.length; i++) {
        let temp = newWeatherData.data[i];
        arr.push(temp);
    }
    bubbleSort(arr);
    return arr;
}

export { handleSubmit };