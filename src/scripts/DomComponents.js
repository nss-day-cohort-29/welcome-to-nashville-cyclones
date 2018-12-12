const domComponents = {
    appendSearchInput(domElement){
        let searchContainer = document.querySelector("#search_container");
        searchContainer.innerHTML += domElement;
        // return searchContainer;
    },

    appendResultsInput(domElement){
        let searchContainer = document.querySelector("#results_container");
        searchContainer.innerHTML += domElement;
        // return searchContainer;
    },

    appendItineraryInput(domElement){
        let searchContainer = document.querySelector("#itinerary_container");
        searchContainer.innerHTML += domElement;
        
        // return searchContainer;
    }
}

// domComponents.appendInput();