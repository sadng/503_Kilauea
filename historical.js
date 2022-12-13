var mymap = L.map('map').setView([19.377458, -155.128688], 10.5);
                
var basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(mymap);

var onex = L.geoJson(one, {
    color: "red",
    }).bindPopup(function (layer) {
        return ("Volcano: " + layer.feature.properties.Volcano + "<br>Region: " + layer.feature.properties.Region + "<br>Date of eruption: " + layer.feature.properties.Date);
}).addTo(mymap);

var twox = L.geoJson(two, {
    color: "grey",
    }).bindPopup(function (layer) {
        return ("Volcano: " + layer.feature.properties.Volcano + "<br>Region: " + layer.feature.properties.Region + "<br>Region name: " + layer.feature.properties.Name + "<br>Date of eruption: " + layer.feature.properties.Date);
}).addTo(mymap);

var threex = L.geoJson(three, {
    color: "yellow",
    }).bindPopup(function (layer) {
        return ("Volcano: " + layer.feature.properties.Volcano + "<br>Region: " + layer.feature.properties.Region + "<br>Region name: " + layer.feature.properties.Name + "<br>Date of eruption: " + layer.feature.properties.Date);
}).addTo(mymap);

var fourx = L.geoJson(four, {
    color: "pink",
}).bindPopup(function (layer) {
    return ("Volcano: " + layer.feature.properties.Volcano + "<br>Region: " + layer.feature.properties.Region + "<br>Region name: " + layer.feature.properties.Name + "<br>Date of eruption: " + layer.feature.properties.Date);
}).addTo(mymap);

var fivex = L.geoJson(five, {
    color: "blue",
    }).bindPopup(function (layer) {
        return ("Volcano: " + layer.feature.properties.Volcano + "<br>Region: " + layer.feature.properties.Region + "<br>Date of eruption: " + layer.feature.properties.Date);
}).addTo(mymap);

var sixx = L.geoJson(six, {
    color: "orange",
    }).bindPopup(function (layer) {
        return ("Volcano: " + layer.feature.properties.Volcano + "<br>Region: " + layer.feature.properties.Region + "<br>Region name: " + layer.feature.properties.Name + "<br>Date of eruption: " + layer.feature.properties.Date);
}).addTo(mymap);

var sevenx = L.geoJson(seven, {
    color: "purple",
    }).bindPopup(function (layer) {
        return ("Volcano: " + layer.feature.properties.Volcano + "<br>Region: " + layer.feature.properties.Region + "<br>Date of eruption: " + layer.feature.properties.Date);
}).addTo(mymap);

L.control.navbar().addTo(mymap);

var Legend = L.control.Legend({
    position: "bottomright",
    title: "Historical Flows",
    legends: [
        {
            label: "1790",
            type: "circle",
            layers: onex,
            color: "red",
            weight: 10,
        },
        {
            label: "1815 to 1823",
            type: "circle",
            layers: twox,
            color: "grey",
            weight: 10,
        },
        {
            label: "1919 to 1920",
            type: "circle",
            layers: threex,
            color: "yellow",
            weight: 10,
        },
        {
            label: "1959",
            type: "circle",
            layers: fourx,
            color: "pink",
            weight: 10,
        },
        {
            label: "1967 to 1969",
            type: "circle",
            layers: fivex,
            color: "blue",
            weight: 10,
        },
        {
            label: "1969 to 1974",
            type: "circle",
            layers: sixx,
            color: "orange",
            weight: 10,
        },
        {
            label: "1982",
            type: "circle",
            layers: sevenx,
            color: "purple",
            weight: 10,
        }
    ]
}).addTo(mymap);