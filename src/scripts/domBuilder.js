const domBuilder = {
    inputfieldBuilder(){
        let searchInputField =
        `<h2>Search Nashville</h2>
        <form>

        <select name="parkSearch" id="parkSearch">
            <option value="" selected disabled hidden>Parks by feature</option>
            <option>ADA Accessible</option>
            <option>Baseball Fields</option>
            <option>Boat Launch</option>
            <option>Camping Available</option>
            <option>Community Center</option>
            <option>Disc Golf</option>
            <option>Dog Park</option>
            <option>Fishing</option>
            <option>Football Fields</option>
            <option>Hiking Trails</option>
            <option>Horse Trails</option>
            <option>Lake</option>
            <option>Playground</option>
            <option>Restrooms Available</option>
            <option>Skate Park</option>
            <option>Swimming Pool</option>
            <option>Tennis Courts</option>
            <option>Walking/Jogging Paths</option>
        </select>
        <button type="button" id="parksButton">LETS GO!</button> <br>

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
