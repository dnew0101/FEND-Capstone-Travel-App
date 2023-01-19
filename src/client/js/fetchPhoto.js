//TODO: make another async function that triggers the backend
const fetchPhotoData = async (url = "", data = {}) => {
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
        const newPhotoData = await response.json();
        return newPhotoData;
    } catch (error) {
        console.log("Error", error);
    }
}

export { fetchPhotoData };