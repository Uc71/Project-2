// // Create the tile layer that will be the background of our map
// var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "light-v10",
//   accessToken: API_KEY
// });

// // Initialize all of the LayerGroups we'll be using
// var layers = {
//     MONDAY: new L.LayerGroup(),
//     TUESDAY: new L.LayerGroup(),
//     WEDNESDAY: new L.LayerGroup(),
//     THURSDAY: new L.LayerGroup(),
//     FRIDAY: new L.LayerGroup(),
//     SATURDAY: new L.LayerGroup(),
//     SUNDAY: new L.LayerGroup()
// };

// // Create the map with our layers
// var map = L.map("map-id", {
//     center: [35.7915, -78.7811],
//     zoom: 12,
//     layers: [
//       layers.MONDAY,
//       layers.TUESDAY,
//       layers.WEDNESDAY,
//       layers.THURSDAY,
//       layers.FRIDAY,
//       layers.SATURDAY,
//       layers.SUNDAY
//     ]
// });
 
// // Add our 'lightmap' tile layer to the map
// lightmap.addTo(map);

// // Create an overlays object to add to the layer control
// var overlays = {
//     "Monday": layers.MONDAY,
//     "Tuesday": layers.TUESDAY,
//     "Wednesday": layers.WEDNESDAY,
//     "Thursday": layers.THURSDAY,
//     "Friday": layers.FRIDAY,
//     "Saturday": layers.SATURDAY,
//     "Sunday": layers.SUNDAY
// };

// // Create a control for our layers, add our overlay layers to it
// L.control.layers(null, overlays).addTo(map);

// // Create a legend to display information about our map
// var info = L.control({
//     position: "bottomright"
// });

// // When the layer control is added, insert a div with the class of "legend"
// info.onAdd = function() {
//     var div = L.DomUtil.create("div", "legend");
//     return div;
// };

// // Add the info legend to the map
// info.addTo(map);

// // Initialize an object containing icons for each layer group
// var icons = {
//     MONDAY: L.ExtraMarkers.icon({
//       icon: "ion-settings",
//       iconColor: "white",
//       markerColor: "yellow",
//       shape: "star"
//     }),
//     TUESDAY: L.ExtraMarkers.icon({
//       icon: "ion-android-bicycle",
//       iconColor: "white",
//       markerColor: "red",
//       shape: "circle"
//     }),
//     WEDNESDAY: L.ExtraMarkers.icon({
//       icon: "ion-minus-circled",
//       iconColor: "white",
//       markerColor: "blue-dark",
//       shape: "penta"
//     }),
//     THURSDAY: L.ExtraMarkers.icon({
//       icon: "ion-android-bicycle",
//       iconColor: "white",
//       markerColor: "orange",
//       shape: "circle"
//     }),
//     FRIDAY: L.ExtraMarkers.icon({
//       icon: "ion-android-bicycle",
//       iconColor: "white",
//       markerColor: "green",
//       shape: "circle"
//     }),
//     SATURDAY: L.ExtraMarkers.icon({
//         icon: "ion-minus-circled",
//         iconColor: "white",
//         markerColor: "black",
//         shape: "star"
//     }),
//     SUNDAY: L.ExtraMarkers.icon({
//         icon: "ion-settings",
//         iconColor: "white",
//         markerColor: "purple",
//         shape: "star"
//     })
// };

// // Perform an API call to the Police Incident endpoint
// var url = "https://data.townofcary.org/api/v2/catalog/datasets/cpd-incidents/exports/json"

// d3.json(url, function(response) {

//     // Create an object to keep of the number of markers in each layer
//     var incidentCount = {
//         MONDAY: 0,
//         TUESDAY: 0,
//         WEDNESDAY: 0,
//         THURSDAY: 0,
//         FRIDAY: 0,
//         SATURDAY: 0,
//         SUNDAY: 0
//     };
  
//     // Initialize a incidentDay, which will be used as a key to access the appropriate layers, icons, and incident count for layer group
//     var incidentDay;

//     // Loop through the incidents
//     for (var i = 0; i < 100; i++) {

//        response.forEach(function(item) {
//            if((item["crimeday"] != null));
//        }) 

//        //if a crime was committed on a Monday in 2020
//        if (response[i].crimeday === "MONDAY") {
//            incidentDay = "MONDAY";
//        }
//        //if a crime was committed on a Tuesday
//        else if (response[i].crimeday === "TUESDAY") {
//         incidentDay = "TUESDAY";
//        }
//        //if a crime was committed on a Wednesday
//        else if (response[i].crimeday === "WEDNESDAY") {
//         incidentDay = "WEDNESDAY";
//        }
//        //if a crime was committed on a Thursday
//        else if (response[i].crimeday === "THURSDAY") {
//         incidentDay = "THURSDAY";
//        }
//        //if a crime was committed on a Friday
//        else if (response[i].crimeday === "FRIDAY") {
//         incidentDay = "FRIDAY";
//        }
//        //if a crime was committed on a Saturday
//        else if (response[i].crimeday === "SATURDAY") {
//         incidentDay = "SATURDAY";
//        }
//        //if a crime was committed on a Sunday
//        else {
//         incidentDay = "SUNDAY";
//        }

//        // update the incident count
//        incidentCount[incidentDay]++;

//        //create a new marker with appropriate icon and coordinates
//        response.forEach(function(items) {
//            if ((items["lat"] !=null ) || (items["lon"] !=null ));
//        });
//        var newMarker = L.marker([response[i].lat, response[i].lon], {
//            icon: icons[incidentDay]
//        });

//        //add the new marker to the appropriate layer
//        newMarker.addTo(layers[incidentDay]);

//        //bind a popup to the marker that will display on click.
//        newMarker.bindPopup(response[i].crime_type + "<br> Date: " + response[i].newdate + "</br>" + "Category: " + response[i].offensecategory);
//     }

//     //call the updateLegend function
//     updateLegend(incidentCount);
// });

// function updateLegend(incidentCount) {
//     document.querySelector(".legend").innerHTML = [
//         "<p class='monday'>Monday Crimes: " + incidentCount.MONDAY + "</p",
//         "<p class='monday'>Tuesday Crimes: " + incidentCount.TUESDAY + "</p",
//         "<p class='monday'>Wednesday Crimes: " + incidentCount.WEDNESDAY + "</p",
//         "<p class='monday'>Thursday Crimes: " + incidentCount.THURSDAY + "</p",
//         "<p class='monday'>Friday Crimes: " + incidentCount.FRIDAY + "</p",
//         "<p class='monday'>Saturday Crimes: " + incidentCount.SATURDAY + "</p",
//         "<p class='monday'>Sunday Crimes: " + incidentCount.SUNDAY + "</p"
//     ].join("");
// }

// Creating map object
var myMap = L.map("map-id", {
    center: [35.7915, -78.7811],
    zoom: 11
  });
  
// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var url = "https://data.townofcary.org/api/v2/catalog/datasets/cpd-incidents/exports/json"

d3.json(url, function(response) {

    var markers = L.markerClusterGroup();
    
    for (var i = 0; i < 100; i++) {

        var location = response[i];

        if (location.lat && location.lon){
            markers.addLayer(L.marker([location.lat, location.lon])
            .bindPopup(response[i].crime_type));
        }

    }
    
    myMap.addLayer(markers);
    
    

});
