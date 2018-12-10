// Playing around with the button reactions | Not the most efficient way to build I'm sure, but this was the way I figuered it out:


// Targeting the elements (in this case the buttons, and giving them an event listener that then triggers a function that is later defined.)
let userSearchParkButton = document.getElementById("parksButton");
userSearchParkButton.addEventListener('click', parksValue);

let userSearchRestaurantsButton = document.getElementById("restaurantsButton");
userSearchRestaurantsButton.addEventListener('click', restaurantsValue);

let userSearchMeetUpsButton = document.getElementById("meetButton");
userSearchMeetUpsButton.addEventListener('click', meetupsValue);

let userSearchConcertsButton = document.getElementById("concertsButton");
userSearchConcertsButton.addEventListener('click', concertsValue);



// These are the functions that run whenever the buttons are pressed:

// These functions target the input sections that the user will type in, and returns the input value to the console.
function parksValue() {
   let userSearchParkValue = document.getElementById("parkSearch").value;
   console.log(userSearchParkValue);
}

function restaurantsValue() {
    let userSearchRestaurantValue = document.getElementById("restaurantSearch").value;
    console.log(userSearchRestaurantValue);
 }

 function meetupsValue() {
    let userSearchMeetupValue = document.getElementById("meetupSearch").value;
    console.log(userSearchMeetupValue);
 }


 function concertsValue() {
    let userSearchConcertValue = document.getElementById("concertSearch").value;
    console.log(userSearchConcertValue);
 }

