// Playing around with the button reactions | Not the most efficient way to build I'm sure, but this was the way I figuered it out:


// Targeting the elements (in this case the buttons, and giving them an event listener that then triggers a function that is later defined.)
let userSearchParkButton = document.getElementById("parksButton");
userSearchParkButton.addEventListener("click", parksValue);

let userSearchRestaurantsButton = document.getElementById("restaurantsButton");
userSearchRestaurantsButton.addEventListener("click", restaurantsValue);

let userSearchMeetUpsButton = document.getElementById("meetButton");
userSearchMeetUpsButton.addEventListener("click", meetupsValue);

let userSearchConcertsButton = document.getElementById("concertsButton");
userSearchConcertsButton.addEventListener("click", concertsValue);



// These are the functions that run whenever the buttons are pressed:

// These functions target the input sections that the user will type in, and returns the input value to the console.
function parksValue() {
   let userSearchParkValue = document.getElementById("parkSearch").value;
   // console.log(userSearchParkValue)
   data.parkData(userSearchParkValue);
   let sectionInfo = document.getElementById("results_container");
   let header = document.createElement("h2");
   sectionInfo.innerHTML = " ";
   header.innerHTML = "Results";
   sectionInfo.appendChild(header);
}

function restaurantsValue() {
    let userSearchRestaurantValue = document.getElementById("restaurantSearch").value;
     data.restaurantData(userSearchRestaurantValue);
     let sectionInfo = document.getElementById("results_container");
     let header = document.createElement("h2");
     sectionInfo.innerHTML = " ";
     header.innerHTML = "Results";
     sectionInfo.appendChild(header);
     
 };

 

 function meetupsValue() {
    let userSearchMeetupValue = document.getElementById("meetupSearch").value;
    console.log(userSearchMeetupValue);
    data.queryEvents();
    let sectionInfo = document.getElementById("results_container");
    let header = document.createElement("h2");
    sectionInfo.innerHTML = " ";
    header.innerHTML = "Results";
    sectionInfo.appendChild(header);
 }


 function concertsValue() {
    let userSearchConcertValue = document.getElementById("concertSearch").value;
    console.log(userSearchConcertValue);
    data.eventNameData(userSearchConcertValue)
    let sectionInfo = document.getElementById("results_container");
    let header = document.createElement("h2");
    sectionInfo.innerHTML = " ";
    header.innerHTML = "Results";
    sectionInfo.appendChild(header);
    
 }

