const domComponents = {
    appendInput(domElement){
        let searchContainer = document.querySelector("#search_container");
        searchContainer.innerHTML += domElement;
    
        // return searchContainer;
    }
}

// domComponents.appendInput();