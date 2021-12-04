<template>
  <div id="app">
    <div><h3>Top 20 regions with the most movies released</h3></div>
    <svg id="proportional-symbol-map" width="1300" height="700" style="background-color: #eee"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "SymbolMap",
  data() {
    return {
      chartData: null,
    };
  },
  mounted() {
    // create the map after the component is mounted
    this.createSymbolMap();
  },
  methods: {
    createSymbolMap() {
    var margin = { top: 20, left: 50, bottom: 80, right: 50 };
    var width = parseInt(d3.select('#proportional-symbol-map').style('width')) - margin.left - margin.right;
    var height = parseInt(d3.select('#proportional-symbol-map').style('height')) - margin.top - margin.bottom;
    var svg1 = d3.select('#proportional-symbol-map')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
  
    var color = d3.scaleOrdinal(d3.schemeCategory10)


    // country data loaded as data
    d3.json('region_count.json').then(function(data) {
        // var max = d3.max(data, function(d) { return d.rate; })
        // var min = d3.min(data, function(d) { return d.rate; })
        color.domain(data.map(function(d) { return d.country; }))
        
        //data join with features
        d3.json('world.geo.json').then(function (json) {
          //console.log(json)
          var x=data
          var y=json
          for (var i = 0; i < x.length; i++) {
            var dataCountry = x[i].country;
            var dataRate = x[i].rate*0.05;
            for (var j = 0; j < y.features.length; j++) {
              var jsonCountry = y.features[j].properties.name;
              if (dataCountry == jsonCountry) {
                json.features[j].properties.rate = dataRate;
                break;
              }
            }
          }
          var projection = d3.geoEquirectangular().fitSize([width, height], json);
          var path = d3.geoPath().projection(projection);
  
          //data join with features
          svg1.append('g')
              .selectAll('path')
              .data(json.features)  
              .enter()
              .append('path')
              .attr('fill', function() {
                return "white"
              })
              .attr('stroke', 'white')
              .attr('opacity', 0.9)
              .attr('d', path)
              console.log(json.features)
          svg1.append('g')
            .selectAll('circle')
            .data(json.features)
            .enter()
            .append('circle')
            .attr('class', 'circle')
            .attr('id', function(d){
              var rate1=d.properties.rate;
              if(rate1){
              var co=d.properties.name;
              var ans=''+co+' '+rate1+'%'
              //console.log(ans)
              return ans
              }
              else{
                return "NAN"
              }
            })
            .attr('transform', function(d) { return 'translate(' + path.centroid(d) + ')'; })
            .attr('r', function(d) { 
              if(d.properties.rate) {
                return 0.1* d.properties.rate;
              } else {
                return 0;
            }})
            .attr('fill', function(d) { 
              if(d.properties.rate) {
                return "red" ;
            }})
            .attr('opacity', 0.65)
//             .on('mouseover', function(d) {
//               d3.select(this)
//               .select('path')
//               .attr('stroke', 'black')
//               .attr('stroke-width', 5)
//               var x=d3.select(this)
//                   .attr("id")
//               //.select('#tooltip').transition().duration(1).style('opacity', 1).text(d.country)
//               if(x!="NAN"){
//               d3.select("#tooltip")
//               .style("left", d.pageX + "px")
//               .style("top", d.pageY + "px")
//               .style("opacity", 1)
//               .select("#value")
//               .text(x);}
//   })
//   .on('mouseout', function(d) {	
//             d3.select(this)
//               .select('path')
//               .attr('stroke-width', 0)
//             d3.select('#tooltip')
//               .style("opacity", 0)})
//              ;
              
          svg1.append('g')
            .selectAll('text')
            .data(json.features)
            .enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', function(d) { return path.centroid(d)[0]; })
            .attr('y', function(d) { return path.centroid(d)[1]; })
            .text(function(d) { 
              if (d.properties.rate) return d.properties.name;
            })
            .attr('text-anchor','middle')
            .attr('alignment-baseline', 'middle')
            .attr('fill', 'black')
            .style('font-size','20px')
           
          // legend
          var f = d3.format('.1f');
          var legend = svg1.append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + (60) + ',' + (height + 60) + ')')
            .selectAll('g')
            .data([100, 50, 25])
            .enter()
            .append('g')
          legend.append('circle')   
            .attr('cy', function(d) { return -1 * d; })
            .attr('r', function(d) { return 1 * d; })
            .attr('stroke' ,'black')
            .attr('opacity', 0.5)
            .attr('fill', 'none')
          legend.append('text')
            .attr('y', function(d) { return -2 * d; })
            .attr('dy', '1em')
            .text(function(d) { return f(d); })
            .attr('font-size', '10px')
            .attr('text-anchor','middle')
          legend.append('text')
            .text('Top 20 Countries with movie releases')
            .attr('x', -90)
            .attr('y', -210)
        });
    });
 
    },
  },
};
</script>

 <style>
.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text {
  font: 12px sans-serif;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
</style>