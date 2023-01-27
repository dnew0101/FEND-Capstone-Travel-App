import { trips } from "../index.js";
import { dayCalc } from "./daysUntilCalc.js";
//creates an object
const createObject = (destination, hometown, departureDate, returnDate, cloudData, upperTemp, lowerTemp, photoLink) => {
    let object = {
        travelTo: destination,
        travelFrom: hometown,
        departing: departureDate,
        returning: returnDate,
        cloudy: cloudData,
        tempHigh: upperTemp,
        tempLow: lowerTemp,
        photo: photoLink};
    
    return object;
}

//renders object in the DOM
const renderCard = (divCardObject) => {
    //creates new card attached to display div
    let displayContainer = document.getElementById('travel-list-display');
    let divCard = document.createElement('div');
    divCard.setAttribute('id', `${divCardObject.travelTo}-${divCardObject.travelFrom}-trip-card`);
    divCard.setAttribute('class', 'travel-card');
    displayContainer.appendChild(divCard);

    //creates info for divs inside the card
    //card photo
    let photoDiv = document.createElement('div');

    //flexbox for labels
    let labelFlexBox = document.createElement('div');
    let daysUntilLabel = document.createElement('div');
    let tripNameLabel = document.createElement('div');

    //flexbox for content
    let contentFlexBox = document.createElement('div');
    let daysUntilDiv = document.createElement('div');
    let tripNameDiv = document.createElement('div');

    //card weather data
    let weatherReportDiv = document.createElement('div');

    //set attributes for SASS styling
    photoDiv.setAttribute('class', 'photo-div');

    //labels
    labelFlexBox.setAttribute('class', 'label-flexbox');
    tripNameLabel.setAttribute('class', 'trip-name-label');
    daysUntilLabel.setAttribute('class', 'days-until-label');

    //content
    contentFlexBox.setAttribute('class', 'content-flexbox');
    tripNameDiv.setAttribute('class', 'trip-name');
    daysUntilDiv.setAttribute('class', 'days-until');

    //weather report for trip
    weatherReportDiv.setAttribute('class', 'weather-report');

    //append divs into card
    divCard.appendChild(photoDiv);

    divCard.appendChild(labelFlexBox);
    divCard.appendChild(contentFlexBox);

    divCard.appendChild(tripNameLabel);
    divCard.appendChild(tripNameDiv);
    divCard.appendChild(daysUntilLabel);
    divCard.appendChild(daysUntilDiv);

    divCard.appendChild(weatherReportDiv);

    //set inner HTML to display fetched info
    photoDiv.innerHTML = `<img src='${divCardObject.photo}'>`;

    tripNameLabel.innerHTML = 'My trip to... ';
    tripNameDiv.innerHTML = `${divCardObject.travelTo}`;

    daysUntilLabel.innerHTML = 'Departing in... ';
    daysUntilDiv.innerHTML = `${dayCalc(divCardObject.departing)}`;

    weatherReportDiv.innerHTML = `High - ${divCardObject.tempHigh}°C / Low - ${divCardObject.tempLow}°C`;
    weatherReportDiv.innerHTML += `<br>Mostly ${divCardObject.cloudy} during your stay!`;
    trips.push(divCardObject);
}

export { createObject };
export { renderCard };