var mymap = L.map('map').setView([19.373, -155.148], 11);

var basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(mymap);
    
var seventeenc = {
    color: "#081fbb"
};

var seventeenx = L.geoJson(seventeen, {
    style: seventeenc,
    interactive: false,
    filter: function(feature, layer) {
    return (seventeen)
    }
}).addTo(mymap);

var sixteenc = {
    color: "#C46210"
};
    
var sixteenx = L.geoJson(sixteen, {
    style: sixteenc,
    interactive: false,
    filter: function(feature, layer) {
    return (sixteen)
    }
}).addTo(mymap);

L.control.navbar().addTo(mymap);

var Legend = L.control.Legend({
    position: "bottomright",
    title: "Flow Legend",
    legends: [
        {
            label: "2014 to 2016 Flow",
            type: "polyline",
            layers: sixteenx,
            color: "#C46210",
            weight: 10,
        }, 
        {
            label: "2016 to 2017 Flow",
            type: "polyline",
            layers: seventeenx,
            color: "#081fbb",
            weight: 10,
        }
    ]
}).addTo(mymap);
