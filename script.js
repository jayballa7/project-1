$(document).foundation();


// Initialize and add the map

function initMap() {
    //var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
    var uluru;
    infoWindow = new google.maps.InfoWindow;
    console.log(window);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            //lat: 46.6062,
            lng: position.coords.longitude
            //lng: -122.3321
        };
        uluru=pos;
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    // The location of Uluru
    //var uluru = {lat: 46.6062, lng: -122.3321};
    // The map, centered at Uluru
    var map = new google.maps.Map(
    document.getElementById("map"), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map:map});


   }


initMap();