// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// This code fetches the JSON from the API
const key = 'This-api-key-is-for-commercial-use-exclusively.Only-entities-with-a-Spotcrime-contract-May-use-this-key.Call-877.410.1607.';
let lat = 40;
//for the US, the longitude will always be negative
let lon = -122;
let radius = 10; // this is in miles
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
fetchJson();
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// This code should loap the map onto the page
$(document).foundation();
// Initialize and add the map
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
  
}
initMap()
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================





