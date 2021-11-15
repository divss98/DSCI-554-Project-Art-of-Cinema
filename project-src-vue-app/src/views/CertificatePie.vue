<template>
    <div id = 'app'>
      
        <br>
       <div class="container" id="chartbuttons">
       <div style="margin-bottom: 2px;"> 
         <h3> Movie Certificate Pie Chart</h3>
        <input type = "button" v-on:click="myPieA" value = "Action" class=" btn btn-dark" style="width: 250px;"> 
        <input type = "button" v-on:click="myPieCo" value = "Comedy" class=" btn btn-dark" style="width: 250px;">
        <input type = "button" v-on:click="myPieD" value = "Drama" class=" btn btn-dark" style="width: 250px;"> 
        <input type = "button" v-on:click="myPieC" value = "Crime" class=" btn btn-dark" style="width: 250px;"> </div>
        
      <svg id='pies' width='500' height='500'></svg>
      </div>
        </div>
</template>

<script>

import * as d3 from 'd3';

export default {

name: 'd3Chart',
  data: function () {
    return {
      chartData: null,
    }
  },
  methods:{
      myPieA(){
var data = [41,3,16,20, 66 ];
//A: 41, PG: 3, R: 16, U: 20, UA: 66 

		var svg = d3.select("svg"),
			width = svg.attr("width"),
			height = svg.attr("height"),
			radius = Math.min(width, height) / 2,
			g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

		// Generate the pie
		var pie = d3.pie();

		// Generate the arcs
		var arc = d3.arc()
					.innerRadius(0)
					.outerRadius(radius);
    var arcs = g.selectAll("arc")
					.data(pie(data))
					.enter()
					.append("g")
					.attr("class", "arc")

		//Draw arc paths
		arcs.append("path")
			.attr("fill", function(d, i) {
				return color(i);
			})
			.attr("d", arc);
},
    myPieCo()
{
    var data = [18,6,29,37,21];

		var svg = d3.select("svg"),
			width = svg.attr("width"),
			height = svg.attr("height"),
			radius = Math.min(width, height) / 2,
			g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

		// Generate the pie
		var pie = d3.pie();

		// Generate the arcs
		var arc = d3.arc()
					.innerRadius(0)
					.outerRadius(radius);
    var arcs = g.selectAll("arc")
					.data(pie(data))
					.enter()
					.append("g")
					.attr("class", "arc")

		//Draw arc paths
		arcs.append("path")
			.attr("fill", function(d, i) {
				return color(i);
			})
			.attr("d", arc);
},
myPieD(){
  var data = [55,8,53,55,41];

		var svg = d3.select("svg"),
			width = svg.attr("width"),
			height = svg.attr("height"),
			radius = Math.min(width, height) / 2,
			g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

		// Generate the pie
		var pie = d3.pie();

		// Generate the arcs
		var arc = d3.arc()
					.innerRadius(0)
					.outerRadius(radius);
    var arcs = g.selectAll("arc")
					.data(pie(data))
					.enter()
					.append("g")
					.attr("class", "arc")

		//Draw arc paths
		arcs.append("path")
			.attr("fill", function(d, i) {
				return color(i);
			})
			.attr("d", arc);
},
myPieC(){
  var data = [43,0,21,8,12];

		var svg = d3.select("svg"),
			width = svg.attr("width"),
			height = svg.attr("height"),
			radius = Math.min(width, height) / 2,
			g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

		// Generate the pie
		var pie = d3.pie();

		// Generate the arcs
		var arc = d3.arc()
					.innerRadius(0)
					.outerRadius(radius);
    var arcs = g.selectAll("arc")
					.data(pie(data))
					.enter()
					.append("g")
					.attr("class", "arc")

		//Draw arc paths
		arcs.append("path")
			.attr("fill", function(d, i) {
				return color(i);
			})
			.attr("d", arc);
}

  },
  mounted: function () {
    console.log('mounted');
    
    if (!this.$store.state.htmlChartData) {
        this.myPieA();
        
    } else {
      this.myPieA();
    }
  }


}
</script>

<style>

h1, h2, div {
    text-align: center; 
}

h1 {
    margin-bottom: 30px;
}
h2 {
    margin-top: 30px; 
}

li {
    text-indent:200px;
    text-align: left;
    font-size: 16px;
}

.bar {
    fill:lightseagreen  ; 
    shape-rendering: crispEdges;}

text.xlabel, text.ylabel {
    font-size: 14px;
    font-weight: bold;
    text-anchor: middle; }

text.title {
    font-size: 30px;
    font-weight: bold;
    text-anchor: middle; }

text.label {
    font-size: 12px;
    fill: black;
    text-anchor: middle;}

.container {
    margin-bottom: 20px;
}
#table1{
    /* border: 1px solid black; */
    border-collapse: collapse;
    margin-left: auto;
    margin-right: 245px;
    display: block;

  }
  /* tr{
    border: 2px solid green;
  } */
  td{
    border: 1px solid black;
    text-anchor: middle;
    text-align:center;
  }

</style>