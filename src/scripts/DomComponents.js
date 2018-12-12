const domComponents = {
    // Called initially when page is loaded
    appendSearchInput(domElement){
        let searchContainer = document.querySelector("#search_container");
        searchContainer.innerHTML += domElement;
    },

    // Called when "lets go" is clicked, "appendResultsInput" is called
    appendResultsInput(domElement){
        let searchContainer = document.querySelector("#results_container");
        searchContainer.innerHTML += domElement;
    },


    // appendItineraryInput(domElement){
    //     let searchContainer = document.querySelector("#itinerary_container");
    //     searchContainer.innerHTML += domElement;
    // }
}

