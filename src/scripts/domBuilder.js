const domBuilder = {
    inputfieldBuilder(){
        let searchInputField =
        `
        <h2>Search Nashville</h2>
        <form>
        <input type = "text" placeholder = "Parks"> <button type = button class = 'parksButton'>CLICK ME</button>
        <input type = "text" placeholder = "Restaurants"><button type = button class = 'parksButton'>CLICK ME</button>
        <input type = "text" placeholder = "Meet-Up"><button type = button class = 'parksButton'>CLICK ME</button>
        <input type = "text" placeholder = "Concerts"><button type = button class = 'parksButton'>CLICK ME</button>
        </form>
        `
        console.log(searchInputField);
        return searchInputField;
    }
}

// domBuilder.inputfieldBuilder();
