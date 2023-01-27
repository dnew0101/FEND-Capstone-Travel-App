import { fetchGeoData } from "./fetchGeo";
import { fetchWeatherData } from "./fetchWeather";
import { bubbleSort } from "./bubbleSort";
import { historyCalc } from "./daysUntilCalc";
import { dateChecker } from "./isValidEntry";
import { fetchPhotoData } from "./fetchPhoto";
import { createObject, renderCard } from "./createObject";

//handle submit function
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
        let weatherStartDate = historyCalc(departureDate);
        let weatherEndDate = historyCalc(returnDate);
        let newWeatherData = await fetchWeatherData('/wbit', {
            lat: newGeoData.results[0].geometry.lat,
            lon: newGeoData.results[0].geometry.lng,
            start_date: weatherStartDate,
            end_date: weatherEndDate});
        console.log(newWeatherData);
        //TODO: continue this string with the Pixabay API; use keywords to search
        let cloudData;
        if (newWeatherData.data[0].clouds > 40) {
            cloudData = "cloudy";
        } else {
            cloudData = "sunny";
        }
        let tempArray = parseData(newWeatherData);
        let upperTemp = tempArray[(tempArray.length)-1];
        let lowerTemp = tempArray[0];

        let newPhotoData = await fetchPhotoData('/photo', {
            isCloudy: cloudData,
            location: destination});
        console.log(newPhotoData);
        
        let photoLink = newPhotoData.hits[0].largeImageURL;
        //TODO: fetch image from the backend with this imageUrl link
        
        let newCard = createObject(destination, hometown, departureDate, returnDate, cloudData, upperTemp, lowerTemp, photoLink);
        renderCard(newCard);
    }
}

const parseData = function (newWeatherData) {
    let arr = new Array();
    for(let i = 0; i < newWeatherData.data.length; i++) {
        let temp = newWeatherData.data[i].temp;
        arr.push(temp);
    }
    bubbleSort(arr);
    console.log(arr);
    return arr;
}

export { handleSubmit };