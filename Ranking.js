// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// ranks threats based on severity
let crime_list = document.querySelector("#crime_list");
let input = document.querySelector("#input");
let inputBtn = document.querySelector(".btn");
let prev = document.querySelector("#prev");
let pageBtn = document.querySelector("#page");
let next = document.querySelector("#next");

// ranking variables
let crimes = ['shooting', 'assault', 'robbery', 'arson', 'burglary', 'theft', 'arrest', 'vandalism', 'other'];
let crimeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let listLimit = input.value;
let page = 0;
let dataCashe = [];

// results per page input box
inputBtn.addEventListener('click', function() {
  listLimit = input.value;
  crime_list.innerHTML = '';
  rankOffences(dataCashe);
});

// previous page button
prev.addEventListener('click', function() {
    if(page > 0) {
      page--;
    }
    crime_list.innerHTML = '';
    rankOffences(dataCashe);
});

// next page button
next.addEventListener('click', function() {
    page++;
    crime_list.innerHTML = '';
    rankOffences(dataCashe);
});
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// this function clears the results on the page if there are any, and then adds new ones based on the location
function rankOffences(data) {
  crimeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    crime_list.innerHTML = "";
    let count = 0;
    dataCashe = data;
    for (var i = 0; i < crimes.length; i++) {
      
        
        for(var j = page * listLimit; j < data.length; j++) {
            if (listLimit == -1 || listLimit > count) {
                if(data[j].type.toLowerCase() === crimes[i]) {
                    count++;
                    crimeCount[i]++;
                  
                    let newRow = document.createElement("tr");
                    let number = document.createElement("td");
                    let type = document.createElement("td");
                    let code = document.createElement("td");
                    let city = document.createElement("td");
                    let link = document.createElement("td");
                    let ref = document.createElement("a");
                    ref.setAttribute('href', data[j].link);
                    ref.setAttribute('target', '_blank');
                    ref.textContent = "link";
                    number.textContent = count + (page * listLimit);
                    type.textContent = data[j].type;
                    code.textContent = data[j].date;
                    city.textContent = data[j].address;
                    link.appendChild(ref);
    
                    newRow.appendChild(number);
                    newRow.appendChild(type);
                    newRow.appendChild(code);
                    newRow.appendChild(city);
                    newRow.appendChild(link);
                    crime_list.appendChild(newRow);
                    addMarker(data[j].lat, data[j].lon, data[j].type);
                }
            }
            
        }
        
    }
    crimeStats();
}
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
//updates the stats at the bottom of the page
function crimeStats() {
  let list = document.getElementById("crimeStats");
  let elements = list.children;

  for(let i = 0; i < crimeCount.length; i++) {
    let stat = crimeCount[i];
    elements[i].children[0].textContent = stat;
  }
}
// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================
// adds a marker of each crime to the map
function addMarker(lat, lon, type) {
  var marker = new google.maps.Marker({
    position: {
        lat: lat,
        lng: lon
    },
    map:map,
    draggable: false,
    title: type
  });
}