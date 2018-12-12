const data = {
    // Fetches all parks in the Nashville area by name:
    parkData(parkFeature){
        fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkFeature}=Yes`)
        .then(parks => parks.json())
        .then(AllParks => {
            AllParks.forEach(park => {
                // console.log("Park name: " + park.park_name)
                // console.log("Park address: " + park.mapped_location_address)
                let parkHTML = park.park_name;
                let parkAddressHTML = park.mapped_location_address;

                domComponents.appendResultsInput(domBuilder.resultsBuilder(parkHTML, parkAddressHTML, "park"));
            })
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
                    domComponents.appendResultsInput(domBuilder.resultsBuilder(eventHTML, eventAddy, "concert"));
                })
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
            //    console.log(`Restaurant name:  ${foods.restaurant.name}
            //      Type of food:  ${foods.restaurant.cuisines}`)
                 let foodHTML = foods.restaurant.name;
                 let addressHTML = foods.restaurant.location.address;
                 domComponents.appendResultsInput(domBuilder.resultsBuilder(foodHTML, addressHTML, "rest"));
            })
            clickSave();
        })
    },

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
                    fetch(`https://www.eventbriteapi.com/v3/venues/${venueID}/?token=BJ2CF2XZDBK773VFPGPW`, {
                        headers: {
                            "Authorization": "Bearer BJ2CF2XZDBK773VFPGPW"
                        }
                        })
                        .then(venues => venues.json())
                        .then(parsedVenues => {
                            
                            let venueAddress = parsedVenues.address.address_1;
                            // console.log(`Event: ${venueName} Address: ${venueAddress}`);

                            // let eventHTML = event.name
                            // let two = "test"
                            domComponents.appendResultsInput(domBuilder.resultsBuilder(venueName, venueAddress, "meet"));
                            clickSave();
                        });
                })
            })
        }
}

