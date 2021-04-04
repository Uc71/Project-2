

// Adding a tile layer (the background map image) to our map

function createMap(streetLights) {

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
  
    // Create an overlayMaps object to hold the streetLights layer
    var overlayMaps = {
      "Street lights": streetLights
    };
  
    // Create the map object with options
    var map = L.map("map", {
      center: [35.791473, -78.78114],
      zoom: 12,
      layers: [lightmap, streetLights]
    });
  
    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  }

function createMarkers(response) {

  // Initialize an array to hold light markers
  var lights = [];
  var lightMarkers = [];
  // Loop through the crime incident array, filter for year 2020
  for (var index = 0; index < response.length; index++) {
    light = response[index]  
    lights.push(light);
    if (light.yearadded){ 
// For each light, create a marker and bind a popup with the light's type
      var lightMarker = L.marker([light.geo_point_2d.lat, light.geo_point_2d.lon])
      .bindPopup("<h3>" + "Year added: " + light.yearadded + "</h3>");

    // Add the marker to the lightMarkers array
      lightMarkers.push(lightMarker);
  }
}
  
  // Create a layer group made from the light markers array, pass it into the createMap function
  createMap(L.layerGroup(lightMarkers));
  
}


var url = "https://data.townofcary.org/api/v2/catalog/datasets/streetlights/exports/json"



d3.json(url, createMarkers)
  
