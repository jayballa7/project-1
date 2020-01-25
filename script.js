// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// This code fetches the JSON from the API

const key = 'This-api-key-is-for-commercial-use-exclusively.Only-entities-with-a-Spotcrime-contract-May-use-this-key.Call-877.410.1607.';
let lat = 40;
//for the US, the longitude will always be negative
let lon = -122;
let radius = 100; // this is in miles


let url = `https://api.spotcrime.com/crimes.json?&lat=${lat}&lon=${lon}&radius=${radius}&key=${key}`;

async function fetchJson() {
  $.ajax({
    type: 'GET',
    url: url,
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
fetchJson();
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// This code should loap the map onto the page

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
  map.setZoom(50);
});

// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================