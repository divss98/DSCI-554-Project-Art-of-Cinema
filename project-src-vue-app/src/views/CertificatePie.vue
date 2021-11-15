<template>
    <div id = 'app'>
       <marquee scrollamount=20><h1>ADVENTURE</h1></marquee>
        <br>
       <div class="container" id="chartbuttons">
       <div style="margin-bottom: 2px;"> 
        <input type = "button" v-on:click="myPieA" value = "IMDB Rating" class=" btn btn-dark" style="width: 250px;"> 
        <input type = "button" v-on:click="myPieCo" value = "Revenue" class=" btn btn-dark" style="width: 250px;"> </div>
        
        <div class="w-100" style="width: auto;"></div>
        <div class="col" style="margin-bottom: 2px;"><button style="width: 250px;" type="button" class="btn btn-success" id="rate_descending">Sort descending by value</button> <button style="width: 200px;" type="button" class="btn btn-success" id="rate_ascending">Sort ascending by value</button> <button style="width: 200px;" type="button" class="btn btn-success" id="country_alphabetical">Sort Alphabetically</button> </div>

        <div class="row" style="width: auto;">
          
          <div class="col" style="margin-bottom: 2px;">  <button style="width: 100px;" type="button" class="btn btn-success" id="top5">Top 5</button> <button style="width: 100px;" type="button" class="btn btn-success" id="bottom5">Bottom 5</button> <button style="width: 100px;" type="button" class="btn btn-success" id="all10">All 20</button></div>

        </div>
        <div > <button  style="width: 100px;" type="button" class="btn btn-danger" id="reset">reset</button></div>
        <div id="chart"></div>
      </div>
    

    <div>
      <table width="800px" height="400px" id="table1"></table>
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
    var data = { A: 41, PG: 3, R: 16, U: 20, UA: 66 };
    console.log(data)
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

		//Generate groups
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
    var data = [2, 4, 8, 10];

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