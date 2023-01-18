import { fetchGeoData } from "./fetchGeo";
import { dateChecker } from "./isValidEntry";

const username = "dnew0130";
async function handleSubmit() {
    let destination = document.getElementById('to').value;
    let hometown = document.getElementById('from').value;
    let departureDate = document.getElementById('departureDate').value;
    let returnDate = document.getElementById('returnDate').value;
    if(dateChecker(departureDate) && dateChecker(returnDate)) {
        console.log(destination, hometown, departureDate, returnDate);
        let geoUrl = `http://api.geonames.org/searchJSON?name=${destination}&username=${username}`;
        let geoData = await fetchGeoData(geoUrl);
        console.log(geoData);
    }
}

export { handleSubmit };