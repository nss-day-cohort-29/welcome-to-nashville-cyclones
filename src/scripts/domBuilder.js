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
        <br>
        <button type="button" id="parksButton">LETS GO!</button>
        <br>

        <input type="text" placeholder="Restaurants by cuisine" id="restaurantSearch">
        <br>
        <button type="button" id ="restaurantsButton">LETS GO!</button>
        <br>

        <input type="text" placeholder="Meetups by topic" id="meetupSearch">
        <br>
        <button type="button" id="meetButton">LETS GO!</button>
        <br>

        <input type="text" placeholder="Concerts by genre" id="concertSearch">
        <br>
        <button type="button" id ="concertsButton">LETS GO!</button>
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
