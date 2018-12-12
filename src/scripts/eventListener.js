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
    data.queryEvents(userSearchMeetupValue);
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

// This runs itineraryBuilder inside domBuilder and adds the HTML and a button class depending on what API was called.
let getSavedResult = (event) => {
   let savedHTML = event.target.parentElement.firstElementChild.innerHTML;
   let buttonClass = event.target.classList[1];
   domBuilder.itineraryBuilder(savedHTML, buttonClass);
}

// WHEN "save" button is clicked:
let clickSave = () => {
    // Taking all elements with class="saveButton"
   let saveButton = document.querySelectorAll(".saveButton");
//    This loops through all "saveButton" elements and adds an event listener to the save buttons.
   for(let i = 0; i < saveButton.length; i++) {
    //    Then runs "getSavedResult" defined at line 71
      saveButton[i].addEventListener("click", getSavedResult);
   }
}


// Targeting each input field by id
const inputParks = document.getElementById("parkSearch");
const inputRestaurants = document.getElementById("restaurantSearch");
const inputMeetups = document.getElementById("meetupSearch");
const inputConcerts = document.getElementById("concertSearch");

// Event listener "listening" for key 13 (enter key) 
// Once enter key is pressed, "click()" function is run
// One eventListener for each input field
inputParks.addEventListener("keyup", function(event){
   if (event.keyCode === 13) {
      document.getElementById("parksButton").click();
   }
});

inputRestaurants.addEventListener("keyup", function(event){
   if (event.keyCode === 13) {
      document.getElementById("restaurantsButton").click();
   }
});

inputMeetups.addEventListener("keyup", function(event){
   if (event.keyCode === 13) {
      document.getElementById("meetButton").click();
   }
});

inputConcerts.addEventListener("keyup", function(event){
   if (event.keyCode === 13) {
      document.getElementById("concertsButton").click();
   }
})






// let saveItinerary = document.getElementById("saveToJson");
// saveItinerary.addEventListener("click", putToJson)








// Stretch goal attempt:
// function putToJson(){
//     let iParkHTML = document.getElementById("park").textContent;
//     let iRestaurantHTML = document.getElementById("rest").textContent;
//     let iMeetHTML = document.getElementById("meet").textContent;
//     let iConcertHTML = document.getElementById("concert").textContent;
//     let iParkKey = document.getElementById("park");
//     let iRestaurantKey = document.getElementById("rest");
//     let iMeetKey = document.getElementById("meet");
//     let iConcertKey = document.getElementById("concert");
//     // console.log(iParkKey, iRestaurantKey, iMeetKey, iConcertKey, iParkHTML, iRestaurantHTML, iMeetHTML, iConcertHTML);
//     let userKeyAndValue = {
//         parkKey: iParkKey,
//         parkName: iParkHTML,
//         restKey:iRestaurantKey,
//         restName:iRestaurantHTML,
//         meetKey:iMeetKey,
//         meetName:iMeetHTML,
//         concertKey:iConcertKey,
//         concertName:iConcertHTML
//     }
//     console.log(userKeyAndValue)
// }

