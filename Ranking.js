// ranks threats based on severity


let lat = '47.234490';
let lon = '-122.096334';
let distance = '10mi';
let dateTime_ini = '2018-01-22T12:00:00.000Z';
let dateTime_end = '2018-12-22T12:00:00.000Z';
let page = 1; 
let url = `https://private-anon-2b5187ebf1-crimeometer.apiary-mock.com/v1/incidents/raw-data?lat=${lat}&lon=${lon}&distance=${distance}&datetime_ini=${dateTime_ini}&datetime_end=${dateTime_end}&page=${page}`;

// test object
let testObject = [
    {
      "total_incidents": 2,
      "total_pages": 1,
      incidents: [
        {
          "city_key": "AUS",
          incident_code: "20191101137",
          "incident_date": "2019-04-20T15:53:00.000Z",
          "incident_offense": "murder",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 5309 E RIVERSIDE DR",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "DWI",
          "incident_source_name": "Austin_Police_Department_Crime_Reports",
          "incident_latitude": 30.2292141,
          "incident_longitude": -97.71322768,
          "incident_address": "5309 E RIVERSIDE DR"
        },
        {
          "city_key": "AUS",
          "incident_code": "20191101207",
          "incident_date": "2019-04-20T16:54:00.000Z",
          "incident_offense": "theft",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 5809 SWEENEY CIR",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "AGG ASSAULT FAM/DATE VIOLENCE",
          "incident_source_name": "Austin_Police_Department_Crime_Reports",
          "incident_latitude": 30.30535921,
          "incident_longitude": -97.67908217,
          "incident_address": "5809 SWEENEY CIR"
        },

        {
          "city_key": "AUS",
          "incident_code": "20191101207",
          "incident_date": "2019-04-20T16:54:00.000Z",
          "incident_offense": "rape",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 5809 SWEENEY CIR",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "AGG ASSAULT FAM/DATE VIOLENCE",
          "incident_source_name": "Austin_Police_Department_Crime_Reports",
          "incident_latitude": 30.30535921,
          "incident_longitude": -97.67908217,
          "incident_address": "5809 SWEENEY CIR"
        }
      ]
    }
  ]



fetch(url) 
    .then(function(response) {
        return response.json;
    })
    .then(function(json) {
        console.log(json);
    })


let crimes = ['murder', 'Assault Offenses', 'rape', 'theft', 'burglary', 'Driving Under the Influence'];
let rankedCrimes = [];


rankOffences(testObject[0]);

function rankOffences(data) {
    
    for (var i = 0; i < crimes.length; i++) {
        for(var j = 0; j < data.incidents.length; j++) {
            if(data.incidents[j].incident_offense === crimes[i]) {
                console.log(data.incidents[j].incident_offense)
                rankedCrimes.push(data.incidents[j].incident_code);
            }
        }
    }
    console.log(rankedCrimes);
     
}
