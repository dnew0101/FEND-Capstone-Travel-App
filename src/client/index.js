//scss file
import "./styles/main.scss";

//js file
import { handleSubmit } from './js/formHandler.js';

//function from project 4
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        handleSubmit();
    })
});

export { handleSubmit };