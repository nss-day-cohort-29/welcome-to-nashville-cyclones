// domBuilder: Holds methods that will create all HTML elements when the functions are called upon.

const domBuilder = {
    // When page loads, the following function is called in main.js:
    // This function populates the search container with ALL search input fields.
    inputfieldBuilder(){
        let searchInputField =
        `<h2>Search Nashville</h2>
        <form>
        <select name="parkSearch" id="parkSearch">
            <option value="" selected disabled hidden>Parks by feature</option>
            <option value="ada_accessible">ADA Accessible</option>
            <option value="baseball_fields">Baseball Fields</option>
            <option value="basketball_courts">Basketball Courts</option>
            <option value="boat_launch">Boat Launch</option>
            <option value="community_center">Community Center</option>
            <option value="disc_golf">Disc Golf</option>
            <option value="dog_park">Dog Park</option>
            <option value="fishing_by_permit">Fishing</option>
            <option value="football_multi_purpose_fields">Football Fields</option>
            <option value="hiking_trails">Hiking Trails</option>
            <option value="horse_trails">Horse Trails</option>
            <option value="lake">Lake</option>
            <option value="playground">Playground</option>
            <option value="restrooms_available">Restrooms Available</option>
            <option value="skate_park">Skate Park</option>
            <option value="soccer_fields">Soccer Fields</option>
            <option value="swimming_pool">Swimming Pool</option>
            <option value="tennis_courts">Tennis Courts</option>
            <option value="walk_jog_paths">Walking/Jogging Paths</options>
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
        return searchInputField;
    },


// Called on click inside of each method (fetch) within data.js
// Creates HTML elements with the item name, item information, and the type of item
// resultType = class that's defined inside each fetch, WHICH ONLY RUNS ON CLICK "lets go!"
    resultsBuilder(itemName, itemInfo, resultType){
        let resultsField =
        `
        <div>
            <div>
                <p>
                ${itemName}
                <br />
                ${itemInfo}</p>
            </div>
            <button type="button" class="saveButton ${resultType}">Save</button>
         </div>
         `

         return resultsField;
    },
    
    // Takes HTML passed through the function "getSavedResult" in eventListener.js and takes "savedHTML" and "buttonClass" as arguments
    // This function runs at the END of "getSavedResult"
    itineraryBuilder(savedData, buttonClass){
        let itineraryField = 
        `
        <p class="finalAppend">
        ${savedData}</p>
        `
        let finalResult = document.getElementById(buttonClass)
        finalResult.innerHTML = itineraryField;
    },

   
}