<template>
  <main> 
    <div class="text-container">
      <h3> Famous movie locations in and around Los Angeles</h3>
        <div id = "map">
            </div>
      <!-- <p>Center: {{ center }}</p>
      <p>Zoom: {{ zoom }}</p> -->
    </div>
<br>
   <h5>Hover over the map and circles to see where a few famous movie shows and movie were shot.</h5>

    
  </main>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "MapboxMap",
  data() {
    // Set initial data, this.createMap() configures event listeners that update data based on user interaction
    return {
      //center: [-93.1247, 44.9323], // St. Paul
      center: [-118.30,34.10],
      zoom: 8.5
    };
  },
  mounted() {
    // create the map after the component is mounted
    this.createMap();
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = 'pk.eyJ1IjoicnVzaGkwMDIzMjQyMyIsImEiOiJja3YwMWV5cHIyNmdoMzBtcGFyczRpMjloIn0.ciCExQmw9cvypesPuA0eLA';
	const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
//center: [-77.04, 38.907],
center: [-118.30,34.10],
zoom: 8.5
			});
map.on('load', () => {
map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':
'<strong>17 Again</strong><p>17 Again is a 2009 American fantasy comedy film directed by Burr Steers. The film follows 37-year-old Mike (Matthew Perry) who becomes his 17-year-old self (Zac Efron) after a chance accident.</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-118.306, 34.111]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>American Crime Story</strong><p>American Crime Story is an American anthology true crime television series developed by Scott Alexander and Larry Karaszewski, who are also executive producers, alongside Brad Falchuk, Nina Jacobson, Ryan Murphy, and Brad Simpson. The series is the second installment in the American Story media franchise, following American Horror Story.</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-118.41, 34.087]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Buffy the Vampire Slayer</strong><p>Buffy the Vampire Slayer is an American supernatural drama television series based on the 1992 film of the same name. It was created by Joss Whedon under his production tag, Mutant Enemy Productions, with later co-executive producers being Jane Espenson, David Fury, David Greenwalt, Doug Petrie, Marti Noxon, and David Solomon.</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-118.323, 33.834]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>How i met your Mother</strong><p>How I Met Your Mother (often abbreviated as HIMYM) is an American sitcom, created by Craig Thomas and Carter Bays for CBS. The series, which ran from 2005 to 2014, follows the main character, Ted Mosby, and his group of friends in New York City\'s Manhattan.</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-118.4134, 34.0529]
}
},
{
'type': 'Feature',
'properties': {
'description':
"<strong>Keeping up with the Kardashians</strong><p>Keeping Up with the Kardashians (often abbreviated KUWTK) is an American reality television series which focuses on the personal and professional lives of the Kardashian–Jenner blended family. Its premise originated with Ryan Seacrest, who also served as an executive producer. The series premiered on the E! cable network on October 14, 2007, ran for 20 seasons, and became one of the longest-running reality television series in the US.</p>"
},
'geometry': {
'type': 'Point',
'coordinates': [-118.6631, 34.1365]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Modern Family</strong><p>Modern Family is an American family sitcom television series created by Christopher Lloyd and Steven Levitan for the American Broadcasting Company. It ran for 11 seasons, from September 23, 2009, to April 8, 2020. It follows the lives of three diverse family set-ups in suburban Los Angeles, linked by patriarch Jay Pritchett.</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-118.4594, 34.0332]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>New Girl</strong><p>New Girl is an American television sitcom created by Elizabeth Meriwether and produced by 20th Television for the Fox Broadcasting Company that originally aired between 2011 and 2018. The series revolves around a quirky teacher, Jess (Zooey Deschanel), after she moves into a Los Angeles loft with three men, Nick (Jake Johnson), Schmidt (Max Greenfield), and Winston (Lamorne Morris); their former roommate Coach (Damon Wayans Jr.) and Jess\' best friend Cece (Hannah Simone) are also part of the series.</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-118.2617, 34.1217]
}
},
{
'type': 'Feature',
'properties': {
'description':
"<strong>Entourage</strong><p>Entourage is an American comedy-drama television series that premiered on HBO on July 18, 2004, and concluded on September 11, 2011, after eight seasons. The series was created and largely written by Doug Ellin and chronicles the acting career of Vincent Chase, a young A-list movie star, and his childhood friends from Queens, New York City, as they attempt to further their nascent careers in Los Angeles.</p>"
},
'geometry': {
'type': 'Point',
'coordinates': [-118.464, 34.1817]
}
},
{
'type': 'Feature',
'properties': {
'description':
"<strong>Hannah Montanna</strong><p>Hannah Montana is an American teen sitcom that was created by Michael Poryes, Rich Correll, and Barry O'Brien, and aired on Disney Channel for four seasons between March 2006 and January 2011. The series centers on Miley Stewart (Miley Cyrus), a teenage girl living a double life as famous pop singer Hannah Montana, an alter ego she adopted so she could maintain her anonymity and live a normal life as a typical teenager. Episodes deal with Miley's everyday struggles to cope with the social and personal issues of adolescence while maintaining the added complexities of her secret identity</p>"
},
'geometry': {
'type': 'Point',
'coordinates': [-118.3169, 34.0973]
}
},
{
'type': 'Feature',
'properties': {
'description':
"<strong>Catch me if you can</strong><p>Catch Me If You Can is a 2002 American biographical crime film directed and produced by Steven Spielberg from a screenplay by Jeff Nathanson and starring Leonardo DiCaprio and Tom Hanks. The film is based on the autobiography of Frank Abagnale, who allegedly, before his 19th birthday, successfully performed cons worth millions of dollars by posing as a Pan American World Airways pilot, a Georgia doctor, and a Louisiana parish prosecutor. The truth of his story is questionable.</p>"
},
'geometry': {
'type': 'Point',
'coordinates': [-118.193741, 33.770050]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Euphoria</strong><p>Euphoria is an American teen drama television series created and written by Sam Levinson for HBO. It is based on the Israeli television miniseries of the same name created by Ron Leshem and Daphna Levin.[1][2][3][4] It follows a group of high school students through their experiences of sex, drugs, friendships, love, identity, and trauma.</p>'
},
'geometry': {
'type': 'Point',
'coordinates': [-118.067, 34.1059]
}
}
]
}
});
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'circle',
'source': 'places',
'paint': {
'circle-color': '#4264fb',
'circle-radius': 6,
'circle-stroke-width': 2,
'circle-stroke-color': '#ffffff'
}
});
 
// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});
 
map.on('mouseenter', 'places', (e) => {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';
 
// Copy coordinates array.
const coordinates = e.features[0].geometry.coordinates.slice();
const description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates).setHTML(description).addTo(map);
});
 
map.on('mouseleave', 'places', () => {
map.getCanvas().style.cursor = '';
popup.remove();
});
}); 
    }
  }
};
</script>

<style scoped>
body.mapboxgl-popup {
max-width: 400px;
font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;}
#map {
  height: 500px;
  width: 1000px;
  max-width: 1000px;
  max-height: 500px;
  margin: 0 auto;
  border: 1px solid darkgrey;
}
.text-container {
  max-width: 1000px;
  display: center;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;
  margin: 0 auto; /* center text container */
}
h3{
  text-align:  center;
}
</style>





