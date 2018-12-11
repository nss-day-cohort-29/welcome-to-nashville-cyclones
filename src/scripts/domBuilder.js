const domBuilder = {
    inputfieldBuilder(){
        let searchInputField =
        `<h2>Search Nashville</h2>
        <form>

        <input type = "text" placeholder = "Parks by feature" id = "parkSearch"><button type = button id = 'parksButton'>LETS GO!</button> <br>

        <input type = "text" placeholder = "Restaurants by food type" id = "restaurantSearch"><button type = button id = 'restaurantsButton'>LETS GO!</button> <br>

        <input type = "text" placeholder = "Meet-ups by topic" id = "meetupSearch"><button type = button id = 'meetButton'>LETS GO!</button> <br>

        <input type = "text" placeholder = "Concerts by genre" id = "concertSearch"><button type = button id = 'concertsButton'>LETS GO!</button>

        </form>
        `
        // console.log(searchInputField);
        return searchInputField;
    },

    resultsBuilder(one, two){
        let resultsField =
        `
        <div>
         <p> ${one}<br>${two}</p>
         <button type = button class ="saveButton">SAVE</button>
        </div>
         `

         return resultsField;
    },


    itineraryBuilder(savedRestaurant){
        let itineraryField = 
        `
        <p>${savedRestaurant}</p>
        `

        return itineraryField;
    }


}

// domBuilder.inputfieldBuilder();
