// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  
  center: [35.791473, -78.78114],
  zoom: 13
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var url = "https://data.townofcary.org/api/v2/catalog/datasets/cpd-incidents/exports/geojson"

//console.log(url)

d3.json(url, function(error, data){
  console.log(data)
})

// read response body and parse as JSON

// Loop through the streetlights array and create one marker for each light, bind a popup containing its name and population add it to the map
//for (var i = 0; i < cities.length; i++) {
//  var city = cities[i];
//  L.marker(city.location)
//    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
//    .addTo(myMap);
//}
