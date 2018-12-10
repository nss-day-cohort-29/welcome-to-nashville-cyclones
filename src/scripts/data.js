const data = {
    // Fetches all parks in the Nashville area by name:
    parkData(){
        fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
        .then(parks => parks.json())
        .then(AllParks => {
            AllParks.forEach(park => {
                console.log("Park name: " + park.park_name)
                console.log("Park address: " + park.mapped_location_address)
            })
        })
    },


    
    // Fetches all concerts in the Nashville Area by events:
    eventNameData(){
        fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=lwzpJ1PeViGyxWDMggoTrRLi4cSrxXmy&city=Nashville&countryCode=US")
            .then(events => events.json())
            .then(Allevents => {
                let allEvents = Allevents._embedded.events
                allEvents.forEach(event => {
                    console.log("Event name: " + event.name)    
                })
            })
        },


    
    // Fetches all concert in the Nashville Area by restaurant and food type:
    restaurantData(){
        fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city", {
            headers: {
                "user-key": "e778850ea3b854b759614b6391f55663"
            }
        })
        .then(foods => foods.json())
        .then(Allfoods => {
            let allfoods = Allfoods.restaurants
            allfoods.forEach(foods => {
                console.log("Restaurant name: " + foods.restaurant.name)
                console.log("Type of food: " + foods.restaurant.cuisines)
            })
        })
    },

    queryEvents() {
        return fetch("https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&token=BJXHAMMBOWECTXM2ZLAL", {
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
}

