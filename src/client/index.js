//scss file
import "./styles/main.scss";

//js file
import { handleSubmit } from './js/formHandler.js';

let listDisplay = document.getElementById("travel-list-display");
let formDisplay = document.getElementById("travel-form");

//global array that contains the objects/info of cards
let trips = new Array();

//function from project 4
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        handleSubmit();
        toggleDisplay();
    })
});

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    toggleDisplay();
});


function toggleDisplay() {
    listDisplay.classList.toggle("inactive-class");
    formDisplay.classList.toggle("inactive-class")
}

export { trips };
export { handleSubmit };