// The following methods only run when CLICKED (see eventlistener.js)

// Object declared below:
const data = {
    // Fetches all parks in the Nashville area by name and address,
    parkData(parkFeature){
        fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkFeature}=Yes`)
        .then(parks => parks.json())
        .then(AllParks => {
            AllParks.forEach(park => {
                // console.log("Park name: " + park.park_name)
                // console.log("Park address: " + park.mapped_location_address)
                let parkHTML = park.park_name;
                let parkAddressHTML = park.mapped_location_address;
                // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
                domComponents.appendResultsInput(domBuilder.resultsBuilder(parkHTML, parkAddressHTML, "park"));
            })
            // Line below is a function declared in eventlistener.js | Used to apply eventlisteners to every save button
            clickSave();
        })
    },


    
    // Fetches all concerts in the Nashville Area by events:
    eventNameData(eventType){
        fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=lwzpJ1PeViGyxWDMggoTrRLi4cSrxXmy&city=Nashville&countryCode=US&keyword=${eventType}&sort=date,asc`)
            .then(events => events.json())
            .then(Allevents => {
                let allEvents = Allevents._embedded.events
                allEvents.forEach(event => {
                    // console.log("Event name: " + event.name)  
                    let eventHTML = event.name
                    let eventAddy = event.dates.start.localDate
                    // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
                    domComponents.appendResultsInput(domBuilder.resultsBuilder(eventHTML, eventAddy, "concert"));
                })
                // Line below is a function declared in eventlistener.js | Used to apply eventlisteners to every save button
                clickSave();
            })
        },


    
    // Fetches all concert in the Nashville Area by restaurant and food type:
    restaurantData(foodType){
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${foodType}`, {
            headers: {
                "user-key": "0f074d9d28fb23cdabd8d271ebb03bdb"
            }
        })
        .then(foods => foods.json())
        .then(Allfoods => {
            let allfoods = Allfoods.restaurants
            allfoods.forEach(foods => {
                 let foodHTML = foods.restaurant.name;
                 let addressHTML = foods.restaurant.location.address;
                 // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
                 domComponents.appendResultsInput(domBuilder.resultsBuilder(foodHTML, addressHTML, "rest"));
            })
             // Line below is a function declared in eventlistener.js | Used to apply eventlisteners to every save button
            clickSave();
        })
    },

    // Fetching event name and venue ID
    queryEvents(variable_name) {
        fetch(`https://www.eventbriteapi.com/v3/events/search/?location.latitude=36.174465&location.longitude=-86.767960&q=${variable_name}&token=BJ2CF2XZDBK773VFPGPW`, {
            headers: {
                "Authorization": "Bearer BJ2CF2XZDBK773VFPGPW"
            }
        })
            .then(response => response.json())
            .then(event => {
                let eventArray = event.events;
                eventArray.forEach(eventIt => {
                    let venueName = eventIt.name.html
                    let venueID = eventIt.venue_id;
                    // Now fetching venue info, in order to access the address
                    fetch(`https://www.eventbriteapi.com/v3/venues/${venueID}/?token=BJ2CF2XZDBK773VFPGPW`, {
                        headers: {
                            "Authorization": "Bearer BJ2CF2XZDBK773VFPGPW"
                        }
                        })
                        .then(venues => venues.json())
                        .then(parsedVenues => {
                            // Grabs venue address:
                            let venueAddress = parsedVenues.address.address_1;
                            // Line below uses 3 arguments passed through resultsBuilder, which is then passed through appendResultsInput
                            domComponents.appendResultsInput(domBuilder.resultsBuilder(venueName, venueAddress, "meet"));
                            // Line below is a function declared in eventlistener.js | Used to apply eventlisteners to every save button
                            clickSave();
                        });
                })
            })
        },
    }

    
        


