const data = {
    queryRestaurants() {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138`, {
            headers: {
                "user-key": "e778850ea3b854b759614b6391f55663"
            }
        })
        .then(response => response.json())
        .then(food => {
            let foodArray = food.restaurants; 
            foodArray.forEach (restIt => {
                console.log(restIt.restaurant.name);
                console.log(restIt.restaurant.cuisines);
            })
             
        })
           
    },
    queryEvents() {
        return fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&token=BJXHAMMBOWECTXM2ZLAL`, {
            headers: {
                "Authorization": "Bearer BJXHAMMBOWECTXM2ZLAL"
            }
        })
            .then(response => response.json())
            .then(event => {
                let eventArray = event.events;
                eventArray.forEach(eventIt => {
                   
                    let venueName = eventIt.name.html
                    let venueID = eventIt.venue_id;
                    fetch(`https://www.eventbriteapi.com/v3/venues/${venueID}/?token=BJ2CF2XZDBK773VFPGPW`, {
                        headers: {
                            "Authorization": "Bearer BJ2CF2XZDBK773VFPGPW"
                        }
                        })
                        .then(venues => venues.json())
                        .then(parsedVenues => {
                            
                            let venueAddress = parsedVenues.address.address_1;
                            console.log(`Venue Name: ${venueName} Venue Address: ${venueAddress}`);
                    });
                })
            })
        }
};