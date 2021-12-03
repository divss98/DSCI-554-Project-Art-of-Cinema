<template>
  <div id="app">
    <br />
    <div class="container" id="chartbuttons">
      <div style="margin-bottom: 2px">
        <h3>Movie Certificate Pie Chart(2018)</h3>
        <marquee scrollamount="20">
          <img src="../assets/sign.jpg" width="100%" height="150px"
        /></marquee>
        <input
          type="button"
          v-on:click="myPieA"
          value="Action"
          class="btn btn-dark"
          style="width: 250px"
        />
        <input
          type="button"
          v-on:click="myPieCo"
          value="Comedy"
          class="btn btn-dark"
          style="width: 250px"
        />
        <input
          type="button"
          v-on:click="myPieD"
          value="Drama"
          class="btn btn-dark"
          style="width: 250px"
        />
        <input
          type="button"
          v-on:click="myPieC"
          value="Crime"
          class="btn btn-dark"
          style="width: 250px"
        />
      </div>
      <div id="tooltip" class="hidden">
        <p id="words"><strong></strong></p>
        <p id="words"><span id="value"></span></p>
      </div>
      <svg id="pies" width="500" height="500"></svg>
      <h5>* all figures in 10's</h5>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "d3Chart",
  data: function () {
    return {
      chartData: null,
    };
  },
  methods: {
    myPieA() {
       var slice = {
        //a slice of pie
        innerRadius: 0,
        outerRadius: 100,
        startAngle: 0,
        endAngle: Math.PI / 2,
      };

      var arc = d3.arc();
      console.log(arc(slice));

      var svg = d3.select("#pies"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        //radius = Math.min(width, height) / 2,
        g = svg
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      arc = g.append("path").attr("d", arc(slice)).attr("fill", "red");

      d3.csv("action_cert.csv", (d) => {
        d.rate = +d.rate;
        return d;
      }).then((data) => {
        var svg = d3.select("#pies"),
          width = +svg.attr("width"),
          height = +svg.attr("height"),
          radius = Math.min(width, height) / 2,
          g = svg
            .append("g")
            .attr(
              "transform",
              "translate(" + width / 2 + "," + height / 2 + ")"
            );

        var color = d3.scaleOrdinal([
          "#a6cee3",
          "#1f78b4",
          "#b2df8a",
          "#33a02c",
          "#fb9a99",
        ]);

        var pie = d3
          .pie()
          .value((d) => d.rate)
          .sort(null)
          .sortValues(d3.descending);

        var path = d3.arc().outerRadius(radius).innerRadius(0);

        var label = d3
          .arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);

        var arc = g
          .selectAll(".arc")
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class", "arc")
          .on("mouseover", function (d) {
            d3.select(this)
              .select("path")
              .attr("stroke", "black")
              .attr("stroke-width", 5);
            var x = d3.select(this).select("g.arc > text").text();

            //.select('#tooltip').transition().duration(1).style('opacity', 1).text(d.country)
            d3.select("#tooltip")
              .style("left", d.pageX + "px")
              .style("top", d.pageY + "px")
              .style("opacity", 1)
              .select("#value")
              .text(x);
          })
          .on("mouseout", function () {
            d3.select(this).select("path").attr("stroke-width", 0);
            d3.select("#tooltip").style("opacity", 0);
          });
        arc
          .append("path")
          .attr("d", path)
          .attr("fill", (d) => color(d.data.rate));

        arc
          .append("text")
          .attr("transform", (d) => "translate(" + label.centroid(d) + ")")
          .attr("class", "pies")
          .text((d) => d.data.certificate + ":" + d.data.rate);
      });
    },
    myPieCo() {
      var slice = {
        //a slice of pie
        innerRadius: 0,
        outerRadius: 100,
        startAngle: 0,
        endAngle: Math.PI / 2,
      };

      var arc = d3.arc();
      console.log(arc(slice));

      var svg = d3.select("#pies"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        //radius = Math.min(width, height) / 2,
        g = svg
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      arc = g.append("path").attr("d", arc(slice)).attr("fill", "red");

      d3.csv("comedy_cert.csv", (d) => {
        d.rate = +d.rate;
        return d;
      }).then((data) => {
        var svg = d3.select("#pies"),
          width = +svg.attr("width"),
          height = +svg.attr("height"),
          radius = Math.min(width, height) / 2,
          g = svg
            .append("g")
            .attr(
              "transform",
              "translate(" + width / 2 + "," + height / 2 + ")"
            );

        var color = d3.scaleOrdinal([
          "#a6cee3",
          "#1f78b4",
          "#b2df8a",
          "#33a02c",
          "#fb9a99",
        ]);

        var pie = d3
          .pie()
          .value((d) => d.rate)
          .sort(null)
          .sortValues(d3.descending);

        var path = d3.arc().outerRadius(radius).innerRadius(0);

        var label = d3
          .arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);

        var arc = g
          .selectAll(".arc")
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class", "arc")
          .on("mouseover", function (d) {
            d3.select(this)
              .select("path")
              .attr("stroke", "black")
              .attr("stroke-width", 5);
            var x = d3.select(this).select("g.arc > text").text();

            //.select('#tooltip').transition().duration(1).style('opacity', 1).text(d.country)
            d3.select("#tooltip")
              .style("left", d.pageX + "px")
              .style("top", d.pageY + "px")
              .style("opacity", 1)
              .select("#value")
              .text(x);
          })
          .on("mouseout", function () {
            d3.select(this).select("path").attr("stroke-width", 0);
            d3.select("#tooltip").style("opacity", 0);
          });
        arc
          .append("path")
          .attr("d", path)
          .attr("fill", (d) => color(d.data.rate));

        arc
          .append("text")
          .attr("transform", (d) => "translate(" + label.centroid(d) + ")")
          .attr("class", "pies")
          .text((d) => d.data.certificate + ":" + d.data.rate);
      });
    },
    myPieD() {
       var slice = {
        //a slice of pie
        innerRadius: 0,
        outerRadius: 100,
        startAngle: 0,
        endAngle: Math.PI / 2,
      };

      var arc = d3.arc();
      console.log(arc(slice));

      var svg = d3.select("#pies"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        //radius = Math.min(width, height) / 2,
        g = svg
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      arc = g.append("path").attr("d", arc(slice)).attr("fill", "red");

      d3.csv("drama_cert.csv", (d) => {
        d.rate = +d.rate;
        return d;
      }).then((data) => {
        var svg = d3.select("#pies"),
          width = +svg.attr("width"),
          height = +svg.attr("height"),
          radius = Math.min(width, height) / 2,
          g = svg
            .append("g")
            .attr(
              "transform",
              "translate(" + width / 2 + "," + height / 2 + ")"
            );

        var color = d3.scaleOrdinal([
          "#a6cee3",
          "#1f78b4",
          "#b2df8a",
          "#33a02c",
          "#fb9a99",
        ]);

        var pie = d3
          .pie()
          .value((d) => d.rate)
          .sort(null)
          .sortValues(d3.descending);

        var path = d3.arc().outerRadius(radius).innerRadius(0);

        var label = d3
          .arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);

        var arc = g
          .selectAll(".arc")
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class", "arc")
          .on("mouseover", function (d) {
            d3.select(this)
              .select("path")
              .attr("stroke", "black")
              .attr("stroke-width", 5);
            var x = d3.select(this).select("g.arc > text").text();

            //.select('#tooltip').transition().duration(1).style('opacity', 1).text(d.country)
            d3.select("#tooltip")
              .style("left", d.pageX + "px")
              .style("top", d.pageY + "px")
              .style("opacity", 1)
              .select("#value")
              .text(x);
          })
          .on("mouseout", function () {
            d3.select(this).select("path").attr("stroke-width", 0);
            d3.select("#tooltip").style("opacity", 0);
          });
        arc
          .append("path")
          .attr("d", path)
          .attr("fill", (d) => color(d.data.rate));

        arc
          .append("text")
          .attr("transform", (d) => "translate(" + label.centroid(d) + ")")
          .attr("class", "pies")
          .text((d) => d.data.certificate + ":" + d.data.rate);
      });
    },
    myPieC() {
      // var data = [43,0,21,8,12];

      // 	var svg = d3.select("svg"),
      // 		width = svg.attr("width"),
      // 		height = svg.attr("height"),
      // 		radius = Math.min(width, height) / 2,
      // 		g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      // 	var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

      // 	// Generate the pie
      // 	var pie = d3.pie();

      // 	// Generate the arcs
      // 	var arc = d3.arc()
      // 				.innerRadius(0)
      // 				.outerRadius(radius);
      //   var arcs = g.selectAll("arc")
      // 				.data(pie(data))
      // 				.enter()
      // 				.append("g")
      // 				.attr("class", "arc")

      // 	//Draw arc paths
      // 	arcs.append("path")
      // 		.attr("fill", function(d, i) {
      // 			return color(i);
      // 		})
      // 		.attr("d", arc);

      var slice = {
        //a slice of pie
        innerRadius: 0,
        outerRadius: 100,
        startAngle: 0,
        endAngle: Math.PI / 2,
      };

      var arc = d3.arc();
      console.log(arc(slice));

      var svg = d3.select("#pies"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        //radius = Math.min(width, height) / 2,
        g = svg
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      arc = g.append("path").attr("d", arc(slice)).attr("fill", "red");

      d3.csv("crime_cert.csv", (d) => {
        d.rate = +d.rate;
        return d;
      }).then((data) => {
        var svg = d3.select("#pies"),
          width = +svg.attr("width"),
          height = +svg.attr("height"),
          radius = Math.min(width, height) / 2,
          g = svg
            .append("g")
            .attr(
              "transform",
              "translate(" + width / 2 + "," + height / 2 + ")"
            );

        var color = d3.scaleOrdinal([
          "#a6cee3",
          "#1f78b4",
          "#b2df8a",
          "#33a02c",
          "#fb9a99",
        ]);

        var pie = d3
          .pie()
          .value((d) => d.rate)
          .sort(null)
          .sortValues(d3.descending);

        var path = d3.arc().outerRadius(radius).innerRadius(0);

        var label = d3
          .arc()
          .outerRadius(radius - 40)
          .innerRadius(radius - 40);

        var arc = g
          .selectAll(".arc")
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class", "arc")
          .on("mouseover", function (d) {
            d3.select(this)
              .select("path")
              .attr("stroke", "black")
              .attr("stroke-width", 5);
            var x = d3.select(this).select("g.arc > text").text();

            //.select('#tooltip').transition().duration(1).style('opacity', 1).text(d.country)
            d3.select("#tooltip")
              .style("left", d.pageX + "px")
              .style("top", d.pageY + "px")
              .style("opacity", 1)
              .select("#value")
              .text(x);
          })
          .on("mouseout", function () {
            d3.select(this).select("path").attr("stroke-width", 0);
            d3.select("#tooltip").style("opacity", 0);
          });
        arc
          .append("path")
          .attr("d", path)
          .attr("fill", (d) => color(d.data.rate));

        arc
          .append("text")
          .attr("transform", (d) => "translate(" + label.centroid(d) + ")")
          .attr("class", "pies")
          .text((d) => d.data.certificate + ":" + d.data.rate);
      });
    },
  },
  mounted: function () {
    console.log("mounted");

    if (!this.$store.state.htmlChartData) {
      this.myPieCo();
    } else {
      this.myPieCo();
    }
  },
};
</script>

<style >
h1,
h2,
div {
  text-align: center;
}

h1 {
  margin-bottom: 30px;
}
h2 {
  margin-top: 30px;
}

li {
  text-indent: 200px;
  text-align: left;
  font-size: 16px;
}

.bar {
  fill: lightseagreen;
  shape-rendering: crispEdges;
}

text.xlabel,
text.ylabel {
  font-size: 14px;
  font-weight: bold;
  text-anchor: middle;
}
#words {
  font-size: 20px;
  font-weight: bold;
  color: blue;
}

text.title {
  font-size: 30px;
  font-weight: bold;
  text-anchor: middle;
}

text.label {
  font-size: 20px;
  fill: black;
  text-anchor: middle;
}

.container {
  margin-bottom: 20px;
}
#table1 {
  /* border: 1px solid black; */
  border-collapse: collapse;
  margin-left: auto;
  margin-right: 245px;
  display: block;
}
/* tr{
    border: 2px solid green;
  } */
td {
  border: 1px solid black;
  text-anchor: middle;
  text-align: center;
}
</style>