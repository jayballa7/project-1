<<<<<<< HEAD
var map = new google.maps.Map(document.getElementById("map-canvas"), {
    center: {
        lat: 27.72,
        lng: 85.36
    },
    zoom: 15
});

var marker = new google.maps.Marker({
    position: {
        lat: 27.72,
        lng: 85.36
    },
    map:map,
    draggable: true
});

var searchBox = new google.maps.places.SearchBox(document.getElementById("mapsearch"));

google.maps.event.addListener(searchBox, "places_changed", function() {
    var places = searchBox.getPlaces();
    var bounds = new google.maps.LatLngBounds();
    var i, place;
    
    for(i = 0; place = places[i]; i++) {
        console.log(place.geometry.location);
        bounds.extend(place.geometry.location);
        marker.setPosition(place.geometry.location);
    }
    map.fitBounds(bounds);
    map.setZoom(15);
});
=======
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// This code fetches the JSON from the API

const key = 'This-api-key-is-for-commercial-use-exclusively.Only-entities-with-a-Spotcrime-contract-May-use-this-key.Call-877.410.1607.';
let lat;
//for the US, the longitude will always be negative
let lon;
let radius = 100; // this is in miles


async function fetchJson(newUrl) {
  $.ajax({
    type: 'GET',
    url: newUrl,
    contentType: 'application/json',
    dataType:'jsonp',
    responseType:'application/json',
    xhrFields: {
      withCredentials: false
    },
    headers: {
      'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET',
      'Access-Control-Allow-Headers':'application/json',
    },
    success: function(data) {
      rankOffences(data.crimes);
    },
    error: function(error) {
      console.log("FAIL....=================");
    }
  });
}

//fetches the json, and updates the list
// fetchJson();
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// This code should loap the map onto the page

var map = new google.maps.Map(document.getElementById("map-canvas"), {
  center: {
      lat: 40,
      lng: -122
  },
  zoom: 5
});
var marker = new google.maps.Marker({
  position: {
      lat: lat,
      lng: lon
  },
  map:map,
  draggable: false,
  icon: {
    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
  }
});
var cityCircle = new google.maps.Circle({
  strokeColor: '#FF0000',
  strokeOpacity: 1,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  map: map,
  center: {
    lat: lat,
    lng: lon
},
  radius: 100000
});

var searchBox = new google.maps.places.SearchBox(document.getElementById("mapsearch"));
google.maps.event.addListener(searchBox, "places_changed", function() {
  var places = searchBox.getPlaces();
  var bounds = new google.maps.LatLngBounds();
  var i, place;
  
  for(i = 0; place = places[i]; i++) {
      var latlng = place.geometry.location;
      bounds.extend(place.geometry.location);
      marker.setPosition(place.geometry.location);

      // this gets the coordinates of the place in the search box
      let temp = JSON.stringify(latlng);
      let coordsObj = JSON.parse(temp);
      let lat1 = coordsObj.lat;
      let lon1 = coordsObj.lng;

      // constructs url to fetch json
      let url = `https://api.spotcrime.com/crimes.json?&lat=${lat1}&lon=${lon1}&radius=${radius}&key=${key}`;

      // removes previous markers
      marker.setMap(null);

      // start the whole process of fetching json, and moving map, adding markers, etc.
      fetchJson(url);
  }
  map.fitBounds(bounds);
  map.setZoom(10);
});
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================



// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================

>>>>>>> 5e2443011fa881bbd43fb9eefb82e12ce4b8dd01
