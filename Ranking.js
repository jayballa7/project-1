// ranks threats based on severity
let crime_list = document.querySelector("#crime-list");
let crimes = ['shooting', 'assault', 'robbery', 'arson', 'burglary', 'theft', 'arrest','vandalism', 'other'];
function rankOffences(data) {
    let count = 0;
    console.log(data.length);
    for (var i = 0; i < crimes.length; i++) {
      
        
        for(var j = 0; j < data.length; j++) {
            if(data[j].type.toLowerCase() === crimes[i]) {
                count++;
                
                
                let newRow = document.createElement("tr");
                let number = document.createElement("td");
                let type = document.createElement("td");
                let code = document.createElement("td");
                let city = document.createElement("td");
                let link = document.createElement("td");
                let ref = document.createElement("a");
                ref.setAttribute('href', data[j].link);
                ref.textContent = "link"
                number.textContent = count;
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
        console.log("count " + count);
    }
}