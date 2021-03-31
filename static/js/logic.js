// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
//var myMap = L.map("map", {
  
 // center: [35.791473, -78.78114],
 // zoom: 13
//});

// Adding a tile layer (the background map image) to our map

function createMap(crimeReports) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "light-v10",
      accessToken: API_KEY
    });
  
    // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
      "Light Map": lightmap
    };
  
    // Create an overlayMaps object to hold the bikeStations layer
    var overlayMaps = {
      "Crime Reports": crimeReports
    };
  
    // Create the map object with options
    var map = L.map("map", {
      center: [35.791473, -78.78114],
      zoom: 12,
      layers: [lightmap, crimeReports]
    });
  
    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  }

function createMarkers(response) {

  // Pull the "stations" property off of response.data
  //var = response.data.stations;

  // Initialize an array to hold bike markers
  var crimeMarkers = [];
  var crimes_2020 = [];
  //var crime_2019 =[]:

  // Loop through the incident array, filter for years 2019 and 2020
  for (var index = 0; index < response.length; index++) {
    if (response[index].year === "2020") {
      crimes_2020.push(response[index]);
      crime_20 = response[index]
  //else if (response[index].year === "2019"){crime_2019.push(response[index])};
    
  // For each crime, create a marker and bind a popup with the crime's name
      var crimeMarker_2020 = L.marker([crime_20.lat, crime_20.lon])
      .bindPopup("<h3>" + "Crime = " + crime_20.crime_type + "</h3>");

    // Add the marker to the crimeMarkers array
      crimeMarkers.push(crimeMarker_2020);
  }
  }
  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(crimeMarkers));

  }

//var url = "https://data.townofcary.org/api/v2/catalog/datasets/cpd-incidents/exports/geojson"
var url = "https:data.townofcary.org/api/v2/catalog/datasets/cpd-incidents/exports/json"

d3.json(url, createMarkers);