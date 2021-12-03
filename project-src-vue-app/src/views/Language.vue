<template>
    <div id = 'app'>
       
		<div id='but'>
            <span class="btn" id="dataset1">1950</span>
			<span class="btn" id="dataset2">1960</span>
			<span class="btn" id="dataset3">1970</span>
			<span class="btn" id="dataset4">1980</span>
			<span class="btn" id="dataset5">1990</span>
			<span class="btn" id="dataset6">2000</span>
			<span class="btn" id="dataset7">2010</span>
			<span class="btn" id="dataset8">2020</span>

            
            
            
    
            
            
            
            
		</div>
		<svg width="1000" height="200" style="background-color: #ddd" id="sv"></svg>
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
      myRating(){
          var dataset1 = [{ key: 'ENGLISH', value: 274 }, { key: 'FRENCH', value: 14 }, { key: 'ITALIAN', value: 17 }, { key: 'JAPANESE', value: 6 }, { key: 'RUSSIAN', value: 2 }, { key: 'SPANISH', value: 12 }, { key: 'SWEDISH', value: 4 }];
            var dataset2 = [{ key: 'ENGLISH', value: 218 }, { key: 'FRENCH', value: 13 }, { key: 'ITALIAN', value: 47 }, { key: 'JAPANESE', value: 31 }, { key: 'RUSSIAN', value: 8 }, { key: 'SPANISH', value: 9 }, { key: 'SWEDISH', value: 3 }];
            var dataset3 = [{ key: 'ENGLISH', value: 290 }, { key: 'FRENCH', value: 55 }, { key: 'ITALIAN', value: 62 }, { key: 'JAPANESE', value: 25 }, { key: 'RUSSIAN', value: 17 }, { key: 'SPANISH', value: 18 }, { key: 'SWEDISH', value: 8 }];
            var dataset4 = [{ key: 'ENGLISH', value: 265 }, { key: 'FRENCH', value: 46 }, { key: 'ITALIAN', value: 65 }, { key: 'JAPANESE', value: 21 }, { key: 'RUSSIAN', value: 16 }, { key: 'SPANISH', value: 21 }, { key: 'SWEDISH', value: 5 }];
            var dataset5 = [{ key: 'ENGLISH', value: 415 }, { key: 'FRENCH', value: 48 }, { key: 'ITALIAN', value: 30 }, { key: 'JAPANESE', value: 18 }, { key: 'RUSSIAN', value: 23 }, { key: 'SPANISH', value: 14 }, { key: 'SWEDISH', value: 7 }];
            var dataset6 = [{ key: 'ENGLISH', value: 659 }, { key: 'FRENCH', value: 101 }, { key: 'ITALIAN', value: 32 }, { key: 'JAPANESE', value: 52 }, { key: 'RUSSIAN', value: 17 }, { key: 'SPANISH', value: 65 }, { key: 'SWEDISH', value: 23 }];
            var dataset7 = [{ key: 'ENGLISH', value: 978 }, { key: 'FRENCH', value: 149 }, { key: 'ITALIAN', value: 61 }, { key: 'JAPANESE', value: 105 }, { key: 'RUSSIAN', value: 48 }, { key: 'SPANISH', value: 98 }, { key: 'SWEDISH', value: 20 }];
            var dataset8 = [{ key: 'ENGLISH', value: 393 }, { key: 'FRENCH', value: 23 }, { key: 'ITALIAN', value: 15 }, { key: 'JAPANESE', value: 11 }, { key: 'RUSSIAN', value: 17 }, { key: 'SPANISH', value: 27 }, { key: 'SWEDISH', value: 3 }];
           
			//var colors = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5',]
            var colors=['#ffffb3','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666','#1b9e77','#d95f02','#7570b3','#e7298a','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#66c2a5','#fc8d62','#8da0cb','#e78ac3']
            //,,,,,,,
            

			dataset1 = dataset1.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

			//🎒  add color property to the objects in the dataset2 and dataset3 similar to dataset1
			dataset2 = dataset2.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

			dataset3 = dataset3.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

            dataset4 = dataset4.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

			//🎒  add color property to the objects in the dataset2 and dataset3 similar to dataset1
			dataset5 = dataset5.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

			dataset6 = dataset6.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

            dataset7 = dataset7.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

			dataset8 = dataset8.map(d => {
				d.color = colors[d.value%29];
				return d;
			});

			////

			update(dataset1);

			//set dataset1 button background-color to lightpink to indicate it is selected
			d3.select('#dataset1').style('background-color', 'lightpink');

			d3.select('#dataset1')
				.on('click', function () {
					//reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});

					//set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset1
					d3.select(this).style('background-color', 'lightpink')
					update(dataset1);
				});

			d3.select('#dataset2')
				.on('click', function () {
					//🎒 reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});


					//🎒 set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset2
					d3.select(this).style('background-color', 'lightpink')
					update(dataset2);
				});


			d3.select('#dataset3')
				.on('click', function () {
					//🎒 reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});
					//🎒 set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset3
					d3.select(this).style('background-color', 'lightpink')
					update(dataset3);
				});


                d3.select('#dataset4')
				.on('click', function () {
					//reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});

					//set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset1
					d3.select(this).style('background-color', 'lightpink')
					update(dataset4);
				});

			d3.select('#dataset5')
				.on('click', function () {
					//🎒 reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});


					//🎒 set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset2
					d3.select(this).style('background-color', 'lightpink')
					update(dataset5);
				});


			d3.select('#dataset6')
				.on('click', function () {
					//🎒 reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});
					//🎒 set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset3
					d3.select(this).style('background-color', 'lightpink')
					update(dataset6);
				});

                d3.select('#dataset7')
				.on('click', function () {
					//🎒 reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});


					//🎒 set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset2
					d3.select(this).style('background-color', 'lightpink')
					update(dataset7);
				});


			d3.select('#dataset8')
				.on('click', function () {
					//🎒 reset color of other buttons using selectAll with class and selection.call
					d3.selectAll('.btn').call(d => {
						d.style('background-color', '#ddd');
					});
					//🎒 set `this` button background-color to lightpink to indicate it is selected and update the graphic using dataset3
					d3.select(this).style('background-color', 'lightpink')
					update(dataset8);
				});
			
            
            
            
                d3.select('#sv')
				.on('click', function () {
					update(dataset1); //reset
				});
                var svg = d3.select('#sv');
                var langs=[['ENGLISH'],['FRENCH'],['ITALIAN'],['JAPANESE'],['RUSSIAN'],['SPANISH'],['SWEDISH']]
                var x = d3.scaleBand();
		
        var xAxis;
        x.domain(langs.map(d => d[0]))
                .range([0, 161])
                .paddingInner(0.2);

            

            xAxis = d3.axisRight()
                .scale(x);

            svg.append('g')
                .attr('id', 'x-axis')
                .attr('class', 'axis')
                //.attr('transform', 'translate(0,' + 100 + ')')
                .attr("transform", "translate(1,5)") 
                .call(xAxis);
			function update(data) {
                
                console.log(data[0].key)
				var svg = d3.select('#sv');
				var rects = svg.selectAll('rect')
					.data(data, function (d) {
						return d.key;
					});

				rects.exit()  //EXIT SELECTION -- here we decide to exit first
					.transition()
					.delay(50)
					.duration(500)
					.style('opacity', 0)
					.remove();

				rects.enter() //ENTER
					.append('rect')
					.attr('fill', function (d) {
						return d.color;
					})
					.merge(rects) // UPDATE + ENTER
					.transition()
					.duration(1000)
					.delay(function (d, i) {
						return i * 1000;
					})
					.attr('x', 0)
					.attr('y', function (d, i) {
						return i * 25;
					})
					.attr('width', function (d) {
						return 100 + d.value ;
					})
					.attr('height', 20);

          
            //         var x = d3.scaleBand();
		
            // var xAxis;
            // x.domain(langs.map(d => d[0]))
			// 		.range([0, 160])
			// 		.paddingInner(0.2);

				

            //     xAxis = d3.axisRight()
			// 		.scale(x);

			// 	svg.append('g')
			// 		.attr('id', 'x-axis')
			// 		.attr('class', 'axis')
			// 		//.attr('transform', 'translate(0,' + 100 + ')')
            //         .attr("transform", "translate(1,5)") 
			// 		.call(xAxis);

				
			
    
    
			}
      
           
},
  },
  mounted: function () {
    console.log('mounted');
    
    if (!this.$store.state.htmlChartData) {
        this.myRating();
        
    } else {
      this.myRating();
    }
  }


}
</script>

<style scoped>
        .axis0 line,
        .axis0 path {
            fill: none;
            stroke: #000;
            shape-rendering: crispEdges;
        }

        .tick line {
            stroke: black;
        }

        .tick {
            stroke: black;
        }

        .btn {
            border-radius: 3px;
            background-color: #ddd;
            padding: 5px;
            margin: 5px;
            font-size: 0.85em;
            font-weight: bold;
            color: #444;
            text-align: left;
            display: inline-block;
        }
        #but{
            margin-left: 100px;
        }
        #sv{
            margin-left: 100px;
            
        }


</style>