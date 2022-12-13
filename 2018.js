var mymap = L.map('map').setView([19.593299, -155.446643], 8.5);
                
var basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(mymap);

L.control.navbar().addTo(mymap);

var eightfissuresx = L.geoJson(eightfissures, {
    color: "#0769E9",
    filter: function(feature, layer) {
        return (eightfissures)
        }
    }).bindPopup(function (layer) {
        return ("Fissure number: " + layer.feature.properties.Fissure);
}).addTo(mymap);

var eightflowx = L.geoJson(eightflow, {
    color: "#DD1C10",
    interactive: false,
    filter: function(feature, layer) {
        return (eightflow)
        }
}).addTo(mymap);

var tephrax = L.geoJson(tephra, {
    color: "#5407E9",
    filter: function(feature, layer) {
        return (tephra)
        }
    }).bindPopup(function (layer) {
        return ("Name: " + layer.feature.properties.NAME + "<br>Lithology: " + layer.feature.properties.LITHOLOGY + "<br>Composition: " + layer.feature.properties.COMPOSITIO + "<br>Age Range: " + layer.feature.properties.AGE_RANGE);
}).addTo(mymap);

var Legend = L.control.Legend({
    position: "bottomright",
    title: "2018 Eruption Legend",
    legends: [
        {
            label: "2018 Lava Flow",
            type: "circle",
            layers: eightflowx,
            color: "#DD1C10",
            weight: 10,
        },
        {
            label: "Fissure Lines",
            type: "polyline",
            layers: eightfissuresx,
            color: "#0769E9",
            weight: 5,
        },
        {
            label: "Tephra Deposits",
            type: "circle",
            layers: tephrax,
            color: "#5407E9",
            weight: 10,
        }
    ]
}).addTo(mymap);