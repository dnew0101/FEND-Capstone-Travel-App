const fetchGeoData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newGeoData = await response.json();
        return newGeoData;
    } catch (error) {
        console.log("Error", error);
    }
}

export { fetchGeoData };