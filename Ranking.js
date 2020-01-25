// ranks threats based on severity
let crime_list = document.querySelector("#crime-list");
let crimes = ['shooting', 'assault', 'robbery', 'arson', 'burglary', 'theft', 'arrest','vandalism', 'other'];
let crimeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let listLimit = 50;
let page = 0;
function rankOffences(data) {
    let count = 0;
    
    for (var i = 0; i < crimes.length; i++) {
      
        
        for(var j = page * listLimit; j < data.length; j++) {
            if (listLimit == -1 || listLimit > count) {
                if(data[j].type.toLowerCase() === crimes[i]) {
                    count++;
                    crimeCount[i]++;
                    console.log(j);
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
                }
            }
            
        }
        
    }
    crimeStats();
}

function crimeStats() {
  let list = document.getElementById("crimeStats");
  let elements = list.children;

  for(let i = 0; i < crimeCount.length; i++) {
    let stat = crimeCount[i];
    elements[i].children[0].textContent = stat;
    if(stat > 1) {
      elements[i].children[1].textContent = elements[i].children[1].textContent + "s";
    }
  }
}