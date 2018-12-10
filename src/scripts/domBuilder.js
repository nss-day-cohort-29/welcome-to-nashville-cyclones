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
         <p> ${one}</p>
         <p> ${two}</p><button type = button class = 'saveButton'>SAVE</button>
        
         `

         return resultsField;
    },


    itineraryBuilder(){
        let itineraryField = 
        `<h2>Itinerary</h2>
        <p>Park: "User's park will be passed through here"</p>
        <p>Restaurant: "User's restaurant will be passed through here"</p>
        <p>Meet-up: "User's meetup will be passed through here"</p>
        <p>Concert: "User's concert will be passed through here"</p>
        `

        return itineraryField;
    }


}

// domBuilder.inputfieldBuilder();

