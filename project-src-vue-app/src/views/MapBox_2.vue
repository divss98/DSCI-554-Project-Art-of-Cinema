<template>
  <main>
      <div id='map'></div>

<div class='map-overlay'>
    <fieldset>
        <input id='feature-filter' type='text' placeholder='Filter results by name' />
    </fieldset>
    <div id='feature-listing' class='listing'></div>
</div>

      </main>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "MapboxMap",
  data() {
    // Set initial data, this.createMap() configures event listeners that update data based on user interaction
    return {
      center: [-93.1247, 44.9323], // St. Paul
      zoom: 10.5
    };
  },
  mounted() {
    // create the map after the component is mounted
    this.createMap();
  },
  methods: {
    createMap() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWJyYWFvYWx2ZXMiLCJhIjoiY2oxbTRzZXBmMDA1ZjJ3bzI3ODZucTM2dCJ9.AICaNFFp-vS2tD5mEHulmA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-98, 38.88],
    maxZoom: 5,
    minZoom: 1,
    zoom: 3
});

// Holds visible airport features for filtering
var airports = [];

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false
});

var filterEl = document.getElementById('feature-filter');
var listingEl = document.getElementById('feature-listing');

function renderListings(features) {
    // Clear any existing listings
    listingEl.innerHTML = '';
    if (features.length) {
        features.forEach(function(feature) {
            var prop = feature.properties;
            var item = document.createElement('a');
            item.href = prop.wikipedia;
            item.target = '_blank';
            item.textContent = prop.name + ' (' + prop.abbrev + ')';
            item.addEventListener('mouseover', function() {
                // Highlight corresponding feature on the map
                popup.setLngLat(feature.geometry.coordinates)
                    .setText(feature.properties.name + ' (' + feature.properties.abbrev + ')')
                    .addTo(map);
            });
            listingEl.appendChild(item);
        });

        // Show the filter input
        filterEl.parentNode.style.display = 'block';
    } else {
        var empty = document.createElement('p');
        empty.textContent = 'Movie ';
        listingEl.appendChild(empty);

        // Hide the filter input
        filterEl.parentNode.style.display = 'none';

        // remove features filter
        map.setFilter('airport', ['has', 'abbrev']);
    }
}

function normalize(string) {
    return string.trim().toLowerCase();
}

// function getUniqueFeatures(array, comparatorProperty) {
//     var existingFeatureKeys = {};
//     // Because features come from tiled vector data, feature geometries may be split
//     // or duplicated across tile boundaries and, as a result, features may appear
//     // multiple times in query results.
//     var uniqueFeatures = array.filter(function(el) {
//         if (existingFeatureKeys[el.properties[comparatorProperty]]) {
//             return false;
//         } else {
//             existingFeatureKeys[el.properties[comparatorProperty]] = true;
//             return true;
//         }
//     });

//     return uniqueFeatures;
// }

map.on('load', function() {

    map.addLayer({
        "id": "airport",
        "source": {
            "type": "vector",
            "url": "mapbox://mapbox.04w69w5j"
        },
        "source-layer": "ne_10m_airports",
        "type": "circle",
    });

   
    map.on('mousemove', 'airport', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Populate the popup and set its coordinates based on the feature.
        var feature = e.features[0];
        popup.setLngLat(feature.geometry.coordinates)
            .setText(feature.properties.name + ' (' + feature.properties.abbrev + ')')
            .addTo(map);
    });

    map.on('mouseleave', 'airport', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });

    filterEl.addEventListener('keyup', function(e) {
        var value = normalize(e.target.value);

        // Filter visible features that don't match the input value.
        var filtered = airports.filter(function(feature) {
            var name = normalize(feature.properties.name);
            var code = normalize(feature.properties.abbrev);
            return name.indexOf(value) > -1 || code.indexOf(value) > -1;
        });

        // Populate the sidebar with filtered results
        renderListings(filtered);

        // Set the filter to populate features into the layer.
        map.setFilter('airport', ['in', 'abbrev'].concat(filtered.map(function(feature) {
            return feature.properties.abbrev;
        })));
    });

    // Call this function on initialization
    // passing an empty array to render an empty state
    renderListings([]);
});
    }
  }
};
</script>

<style scoped>
#map {
  height: 400px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid darkgrey;
}
.text-container {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  margin: 0 auto; /* center text container */
}
</style>





