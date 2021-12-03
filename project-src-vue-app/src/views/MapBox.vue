<template>
  <main>
    <div class="text-container">
        <div id = "map">
            </div>
      <!-- <p>Center: {{ center }}</p>
      <p>Zoom: {{ zoom }}</p> -->
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
    //   mapboxgl.accessToken = 'pk.eyJ1IjoicnVzaGkwMDIzMjQyMyIsImEiOiJja3YwMWV5cHIyNmdoMzBtcGFyczRpMjloIn0.ciCExQmw9cvypesPuA0eLA';
	// 		const map1 = new mapboxgl.Map({
	// 			container: 'map2', // container ID
	// 			style: 'mapbox://styles/mapbox/dark-v10', // style URL
	// 			center: [-118.284867, 34.02283,], // starting position [lng, lat]
	// 			zoom: 15 // starting zoom
	// 		});

    //     map1.on('load', function () {
	// 			map1.addSource('footprints_source', {
	// 				type: 'geojson',
	// 				data: 'footprints.geojson'
	// 			});


	// 			map1.addLayer({
	// 				'id': 'footprints',
	// 				'type': 'fill',
	// 				'source': 'footprints_source',
	// 				'layout': {},
	// 				'paint': {
	// 					'fill-color': [
    //                         'interpolate',
    //                         ['linear'],
    //                         ['get', 'HEIGHT'],
    //                         0,
    //                         '#F2F12D',
    //                         25,
    //                         '#EED322',
    //                         50,
    //                         '#E6B71E',
    //                         75,
    //                         '#DA9C20',
    //                         100,
    //                         '#CA8323',
    //                         125,
    //                         '#B86B25',
    //                         150,
    //                         '#A25626'
    //                         ],
	// 					'fill-opacity': 0.8
	// 				}
	// 			});
	// 		});
    //     this.map = map1
    //     this.map.on()


        this.map = new mapboxgl.Map({
        accessToken:
          "pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiY2p4bHd1OXdpMGFycDN0bzFiNWR4d2VyNyJ9.3hQjvgyoPoCuRx-Hqr_BFQ",
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        minzoom: 5,
        center: this.center, // use initial data as default
        zoom: this.zoom,
        hash: true // sets url's hash to #zoom/lat/lng
      });

    
    this.map.on('load',  () => {
				this.map.addSource('footprints_source', {
					type: 'geojson',
					data: 'footprints.geojson'
				});


				this.map.addLayer({
					'id': 'footprints',
					'type': 'fill',
					'source': 'footprints_source',
					'layout': {},
					'paint': {
						'fill-color': [
                            'interpolate',
                            ['linear'],
                            ['get', 'HEIGHT'],
                            0,
                            '#F2F12D',
                            25,
                            '#EED322',
                            50,
                            '#E6B71E',
                            75,
                            '#DA9C20',
                            100,
                            '#CA8323',
                            125,
                            '#B86B25',
                            150,
                            '#A25626'
                            ],
						'fill-opacity': 0.8
					}
				});
			});

      // set mapbox event listeners to update Vue component data
    //   this.map.on("move", () => {
    //     // set the vue instance's data.center to the results of the mapbox instance method for getting the center
    //     this.center = this.map.getCenter();
    //   });
    //   this.map.on("zoom", () => {
    //     // set the vue instance's data.zoom to the results of the mapbox instance method for getting the zoom
    //     this.zoom = this.map.getZoom();
    //   });
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





