//scss file
import "./styles/main.scss";

//js file
import { handleSubmit } from './js/formHandler.js';

let listDisplay = document.getElementById("travel-list-display");
let formDisplay = document.getElementById("travel-form");
let navbar = document.getElementById("floating-nav");

//global array that contains the objects/info of cards
let trips = retrieveTripsFromLocalStorage();


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
    formDisplay.classList.toggle("inactive-class");
    navbar.classList.toggle("inactive-class");
}


//delete function
// Assign a click event listener to the trash can icon
const trashCan = document.getElementById("delete-button");
trashCan.addEventListener("click", () => {
    
  // Get all travel cards in the viewport
  const travelCards = document.querySelectorAll(".travel-card");
  let cardInViewport = null;
  
  // Check which card is in the viewport using getBoundingClientRect()
  travelCards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    if (cardRect.top >= 0 && cardRect.bottom <= window.innerHeight) {
      cardInViewport = card;
    }
  });

  // If there's a card in the viewport, delete it from the array and from the viewport
  if (cardInViewport) {
    const index = trips.findIndex((trip) => {
      return trip.travelTo + "-" + trip.travelFrom === cardInViewport.id;
    });
    trips.splice(index, 1);
    cardInViewport.remove();
  }
});

//local storage
// Store trips array in localStorage
function storeTripsInLocalStorage() {
  localStorage.setItem("trips", JSON.stringify(trips));
}

//Retrieve trips array from localStorage
function retrieveTripsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("trips")) || [];
}


export { trips };
export { handleSubmit };
export { storeTripsInLocalStorage };