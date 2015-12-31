// this is an API key or token. you should replace this long thing with yours from your account
// this allows mapbox to know who is requesting what data and how people are using their product
// if there was a limit for how many times you could use the API per day, this key would keep track of how many you made
L.mapbox.accessToken = 'pk.eyJ1Ijoia3Jpc3RpZWhvdyIsImEiOiJlNTQyMmI3NGFiMDUwYWQxZDJjY2Y3YzNjYmUxMTg2MCJ9.D4f94GJCVdYq8fYW2hAR5w';

//create the map and set the view
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

//add a feature layer to the map we created above
var myLayer = L.mapbox.featureLayer().addTo(map);

//geoJSON holds the geographic information to put the points on the map
var geojson = {
    type: 'FeatureCollection',


    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Bay Area, CA',
            description: 'There are FIFTEEN summer immersion programs in the Bay Area this year!',
            'marker-color': '#f9d62e',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.419, 37.774]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'New York and Newark',
            description: 'Girls Who Code\'s first program was here in 2012!',
            'marker-color': '#eae374',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-74.0059, 40.7127837]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Seattle, WA',
            description: 'GWC is in Seattle for the second year!',
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'cafe',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.332, 47.606]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Miami, Florida',
            description: 'I hope all that sun doesn\'t melt the computers',
            'marker-color': '#7ec9b1',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-80.19, 25.76]
        }
    },
        {
        type: 'Feature',
        properties: {
            title: 'Los Angeles',
            description: 'In Los Angeles, everyone is a star!<br />-Denzel Washington<br /><img src="http://i.imgur.com/pLQpP1H.png" class="popupimage" /> ',
            'marker-color': '#fc913a',
            'marker-size': 'large',
            'marker-symbol': 'star',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.24, 34.05]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Boston, MA',
            description: 'How bout them Yankees?',
            'marker-color': '#ff4e50',
            'marker-size': 'large',
            'marker-symbol': 'marker',
        },
        geometry: {
            type: 'Point',
            coordinates: [-71.05, 42.36]
        }
    },


    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
