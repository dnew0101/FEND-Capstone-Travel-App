const fetchGeoData = async (geoUrl) => {
    try {
        const geoData = await fetch(geoUrl);
        const jsonData = await geoData.json();
        console.log(jsonData);
    } catch(error) {
        console.log("Error ", error);
    }
}

export { fetchGeoData };