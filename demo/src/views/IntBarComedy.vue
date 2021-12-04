<template>
    <div id = 'app'>
       <marquee scrollamount=20><h1>COMEDY</h1></marquee>
        <br>
       <div class="container" id="chartbuttons">
       <div style="margin-bottom: 2px;"> 
        <input type = "button" v-on:click="myRating" value = "IMDB Rating" class=" btn btn-dark" style="width: 250px;"> 
        <input type = "button" v-on:click="myRevenue" value = "Revenue" class=" btn btn-dark" style="width: 250px;"> </div>
        
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
      myRating(){
    var display = document.getElementById('chart');
    display.innerHTML = "";
var margin = { top: 70, left: 80, bottom: 80, right: 80 };
var width = 900 - margin.left - margin.right;
var height = 800 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom+200)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var x = d3.scaleBand();
var y = d3.scaleLinear();

var dataset, all, mode;
var xAxis, yAxis;
var sort,sortMode;

d3.json("comedy20.json").then(function(data){
    dataset = data;
    all = data;
    dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); });
    drawBars();
    sort = "Alphabetical";
    mode = "All";
});

//sort bars
d3.select("#reset")
    .on("click", function () {
        dataset = all;
        sort = "Alphabetical";
        mode = "All";
        x.domain(dataset.sort(
            function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); }
        ).map(function (d) { return d.Series_Title; }));
        filterBars();
        toggle_all()
        
    });
d3.select("#country_alphabetical")
    .on("click", function () {
        sort = "Alphabetical";
        sortMode='#country_alphabetical'
        x.domain(dataset.sort(
            function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); }
        ).map(function (d) { return d.Series_Title; }));
        transitionBars();
        toggle('#country_alphabetical')
    });
d3.select("#rate_ascending")
    .on("click", function () {
        sort = "Ascending";
        sortMode="#rate_ascending"
        x.domain(dataset.sort(
            function(a, b) { return d3.ascending(a.IMDB_Rating, b.IMDB_Rating); }
        ).map(function (d) { return d.Series_Title; }));
        transitionBars();
        toggle('#rate_ascending');
    });
d3.select("#rate_descending")
    .on("click", function () {
        sort = "Descending";
        sortMode="#rate_descending"
        x.domain(dataset.sort(
            function(a, b) { return d3.descending(a.IMDB_Rating, b.IMDB_Rating); }
        ).map(function (d) { return d.Series_Title; }));
        transitionBars();
        toggle('#rate_descending');
        
    });

// filter bars
d3.select("#all10")
    .on("click", function () {
        mode = "All"
        dataset = all.sort(
            function(a, b) { return d3.descending(a.IMDB_Rating, b.IMDB_Rating); }
        ).slice(0, 20);
        toggle_filter('#all10');
        toggle(sortMode);
        
        if (sort === "Alphabetical") {
            dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); })
        } else if (sort === "Ascending") {
            dataset.sort(function(a, b) { return d3.ascending(a.IMDB_Rating, b.IMDB_Rating); })
        } else if (sort === "Descending") {
            dataset.sort(function(a, b) { return d3.descending(a.IMDB_Rating, b.IMDB_Rating); })
        }
        
        filterBars();
});

d3.select("#top5")
    .on("click", function () {
        mode = "Top 5"
        dataset = all.sort(
            function(a, b) { return d3.descending(a.IMDB_Rating, b.IMDB_Rating); }
        ).slice(0, 5);
        toggle_filter('#top5');
        toggle(sortMode);
        
        if (sort === "Alphabetical") {
            dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); })
        } else if (sort === "Ascending") {
            dataset.sort(function(a, b) { return d3.ascending(a.IMDB_Rating, b.IMDB_Rating); })
        } else if (sort === "Descending") {
            dataset.sort(function(a, b) { return d3.descending(a.IMDB_Rating, b.IMDB_Rating); })
        }

        filterBars();
});

d3.select("#bottom5")
    .on("click", function () {
        //setMode("#bottom5");
        mode = "Bottom 5"
        dataset = all.sort(
            function(a, b) { return d3.descending(a.IMDB_Rating, b.IMDB_Rating); }
        ).slice(12, 17);
        toggle_filter('#bottom5');
        toggle(sortMode);

        if (sort === "Alphabetical") {
            dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); })
        } else if (sort === "Ascending") {
            dataset.sort(function(a, b) { return d3.ascending(a.IMDB_Rating, b.IMDB_Rating); })
        } else if (sort === "Descending") {
            dataset.sort(function(a, b) { return d3.descending(a.IMDB_Rating, b.IMDB_Rating); })
        }

        filterBars();
});

function toggle(id) {
    d3.selectAll('#rate_descending,#rate_ascending,#country_alphabetical')
        .style('background-color', 'green');
    d3.select(id)
        .style('background-color', '#e25a0077');
    
}

function toggle_all(){
    d3.select('#reset')
       .style('background-color', 'red');
    d3.selectAll('#rate_descending,#rate_ascending,#country_alphabetical,#bottom5,#top5,#all10')
       .style('background-color', 'green');
}

function toggle_filter(id) {
    d3.selectAll('#bottom5,#top5,#all10')
        .style('background-color', 'green');
    d3.select(id)
        .style('background-color', '#e25a0077');
}


function filterBars() {
    //update scale
    x.domain(dataset.map(function (d) { return d.Series_Title; }));

    ////////////////////////////////
    // DATA JOIN FOR BARS.
    var bars = svg.selectAll(".bar")
        .data(dataset, function (d) { return d.Series_Title; });

    // UPDATE + ENTER.
    bars.enter().append("rect")
        .attr("x", function (d) { return x(d.Series_Title); })
        .attr("y", function (d) { return y(d.IMDB_Rating); })
        .merge(bars)
        .transition()
        .duration(750)
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.Series_Title); })
        .attr("y", function (d) { return y(d.IMDB_Rating); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.IMDB_Rating); });

    // EXIT.
    bars.exit()
        .transition()
        .duration(750)
        .style("opacity", 0)
        .remove();

    ////////////////////////////////
    // DATA JOIN FOR NAMES.
    var labels = svg.selectAll(".label")
        .data(dataset, function (d) { return d.Series_Title; });

    // UPDATE.
    labels.transition()
        .duration(750)
        .attr("x", function (d) { return x(d.Series_Title) + x.bandwidth() / 2; });


    labels.exit()
        .transition()
        .duration(750)
        .style("opacity", 0)
        .remove();

    ////////////////////////////////
    // x_axis.                 
    xAxis = d3.axisBottom()
        .scale(x);
    svg.select(".x_axis")
        .transition()
        .duration(750)
        .call(xAxis)
        .selectAll('text')  
        .attr('text-anchor', 'start')
        .attr('transform', 'rotate(25)');
    // y_axis. 
    svg.select(".y_axis")
        .call(yAxis);

    ////////////////////////////////
    // title.   
    // var titles = svg.select(".title")              
    //     .transition()
    //     .duration(750)
    //     .text("IMDB Rating of" + mode +  ":" + sort + " order")
}

function transitionBars() {
    var transition = svg.transition()
        .duration(750);

    transition.selectAll(".bar")
        .attr("x", function (d) {
            return x(d.Series_Title);
        });

    transition.selectAll(".label")
        .attr("x", function (d) {
            return x(d.Series_Title) + x.bandwidth() / 2;
        });

    transition.select(".x_axis").call(xAxis);
    transition.select(".y_axis").call(yAxis);
    
    transition.select(".title")
        .text("IMDB Rating " + mode +  ":" + sort + " order");
}

function drawBars() {
    x.domain(dataset.map(function (d) { return d.Series_Title; }))
        .range([0, width])
        .padding(0.05);

    y.domain([0, d3.max(dataset, function (d) { return d.IMDB_Rating; })])
        .range([height, 0]);

    svg.selectAll(".bar")
        .data(dataset, function (d) { return d.Series_Title; })
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.Series_Title); })
        .attr("y", function (d) { return y(d.IMDB_Rating); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.IMDB_Rating); });

    xAxis = d3.axisBottom()
        .scale(x);

    svg.append("g")
        .attr("class", "x_axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll('text')
        .attr('text-anchor', 'start')
        .attr('transform', 'rotate(25)');

    svg.append("text")
        .attr("class", "xlabel")
        .text("Movie")
        .attr("x", width/2)
        .attr("y", height + 70)
        .style("baseline-shift", "nomal")

    //yAxis;
    yAxis = d3.axisLeft()
        .scale(y)
        .ticks(5, 'd');

    svg.append("g")
        .attr("class", "y_axis")
        .call(yAxis);

    svg.append("text")
        .attr('class', 'ylabel')
        .text("IMDB Rating")
        .attr("x", - height / 3)
        .attr("y", - margin.left * 0.7)
        .attr("transform", "rotate(-90)")
        .style("baseline-shift", "nomal")
    
    //title
    svg.append("text")
        .attr("class", "title")
        .text("IMDB Rating of Movies in Alphabetical Order")
        .attr("x", width/2)
        .attr("y", -20)
        .style("baseline-shift", "nomal")
}
d3.csv("comedy_top20.csv").then(function(data) {
    console.log(data)
    var table = d3.select('#table1');
    //head
    var columns = ['Movie', 'RunTime','Director','Star','Overview'];
    table.append('thead')
        .append('tr')
        .style('background', 'gainsboro')
        .selectAll('td')
        .data(columns)
        .enter()
        .append('td') 
        .text(function(d) {return d; })
        .style('font-size', '18px')
        .style('font-weight', 'bold')
    //body
    table.append('tbody')
      .selectAll('tr')
      .data(data)
      .enter()
      .append('tr')
      .selectAll('td')
      .data(function(d) { return [d.Series_Title,d.Runtime,d.Director,d.Star1,d.Overview]; })
      .enter()
      .append('td')
      .text(function(d) { return d; })        
  });
},
    myRevenue()
{
    console.log("Called Reve")
    var display = document.getElementById('chart');
    display.innerHTML = "";
    var margin = { top: 70, left: 80, bottom: 80, right: 80 };
var width = 900 - margin.left - margin.right;
var height = 800 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom+200)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var x = d3.scaleBand();
var y = d3.scaleLinear();

var dataset, all, mode;
var xAxis, yAxis;
var sort,sortMode;

d3.json("comedy20.json").then(function(data){
    dataset = data;
    all = data;
    dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); });
    drawBars();
    sort = "Alphabetical";
    mode = "All";
});

//sort bars
d3.select("#reset")
    .on("click", function () {
        dataset = all;
        sort = "Alphabetical";
        mode = "All";
        x.domain(dataset.sort(
            function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); }
        ).map(function (d) { return d.Series_Title; }));
        filterBars();
        toggle_all()
        
    });
d3.select("#country_alphabetical")
    .on("click", function () {
        sort = "Alphabetical";
        sortMode='#country_alphabetical'
        x.domain(dataset.sort(
            function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); }
        ).map(function (d) { return d.Series_Title; }));
        transitionBars();
        toggle('#country_alphabetical')
    });
d3.select("#rate_ascending")
    .on("click", function () {
        sort = "Ascending";
        sortMode="#rate_ascending"
        x.domain(dataset.sort(
            function(a, b) { return d3.ascending(a.Gross, b.Gross); }
        ).map(function (d) { return d.Series_Title; }));
        transitionBars();
        toggle('#rate_ascending');
    });
d3.select("#rate_descending")
    .on("click", function () {
        sort = "Descending";
        sortMode="#rate_descending"
        x.domain(dataset.sort(
            function(a, b) { return d3.descending(a.Gross, b.Gross); }
        ).map(function (d) { return d.Series_Title; }));
        transitionBars();
        toggle('#rate_descending');
        
    });

// filter bars
d3.select("#all10")
    .on("click", function () {
        mode = "All"
        dataset = all.sort(
            function(a, b) { return d3.descending(a.Gross, b.Gross); }
        ).slice(0, 20);
        toggle_filter('#all10');
        toggle(sortMode);
        
        if (sort === "Alphabetical") {
            dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); })
        } else if (sort === "Ascending") {
            dataset.sort(function(a, b) { return d3.ascending(a.Gross, b.Gross); })
        } else if (sort === "Descending") {
            dataset.sort(function(a, b) { return d3.descending(a.Gross, b.Gross); })
        }
        
        filterBars();
});

d3.select("#top5")
    .on("click", function () {
        mode = "Top 5"
        dataset = all.sort(
            function(a, b) { return d3.descending(a.Gross, b.Gross); }
        ).slice(0, 5);
        toggle_filter('#top5');
        toggle(sortMode);
        
        if (sort === "Alphabetical") {
            dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); })
        } else if (sort === "Ascending") {
            dataset.sort(function(a, b) { return d3.ascending(a.Gross, b.Gross); })
        } else if (sort === "Descending") {
            dataset.sort(function(a, b) { return d3.descending(a.Gross, b.Gross); })
        }

        filterBars();
});

d3.select("#bottom5")
    .on("click", function () {
        //setMode("#bottom5");
        mode = "Bottom 5"
        dataset = all.sort(
            function(a, b) { return d3.descending(a.Gross, b.Gross); }
        ).slice(12, 17);
        toggle_filter('#bottom5');
        toggle(sortMode);

        if (sort === "Alphabetical") {
            dataset.sort(function(a, b) { return d3.ascending(a.Series_Title, b.Series_Title); })
        } else if (sort === "Ascending") {
            dataset.sort(function(a, b) { return d3.ascending(a.Gross, b.Gross); })
        } else if (sort === "Descending") {
            dataset.sort(function(a, b) { return d3.descending(a.Gross, b.Gross); })
        }

        filterBars();
});

function toggle(id) {
    d3.selectAll('#rate_descending,#rate_ascending,#country_alphabetical')
        .style('background-color', 'green');
    d3.select(id)
        .style('background-color', '#e25a0077');
    
}

function toggle_all(){
    d3.select('#reset')
       .style('background-color', 'red');
    d3.selectAll('#rate_descending,#rate_ascending,#country_alphabetical,#bottom5,#top5,#all10')
       .style('background-color', 'green');
}

function toggle_filter(id) {
    d3.selectAll('#bottom5,#top5,#all10')
        .style('background-color', 'green');
    d3.select(id)
        .style('background-color', '#e25a0077');
}


function filterBars() {
    //update scale
    x.domain(dataset.map(function (d) { return d.Series_Title; }));

    ////////////////////////////////
    // DATA JOIN FOR BARS.
    var bars = svg.selectAll(".bar")
        .data(dataset, function (d) { return d.Series_Title; });

    // UPDATE + ENTER.
    bars.enter().append("rect")
        .attr("x", function (d) { return x(d.Series_Title); })
        .attr("y", function (d) { return y(d.Gross); })
        .merge(bars)
        .transition()
        .duration(750)
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.Series_Title); })
        .attr("y", function (d) { return y(d.Gross); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.Gross); });

    // EXIT.
    bars.exit()
        .transition()
        .duration(750)
        .style("opacity", 0)
        .remove();

    ////////////////////////////////
    // DATA JOIN FOR NAMES.
    var labels = svg.selectAll(".label")
        .data(dataset, function (d) { return d.Series_Title; });

    // UPDATE.
    labels.transition()
        .duration(750)
        .attr("x", function (d) { return x(d.Series_Title) + x.bandwidth() / 2; });

    // ENTER.
    // labels.enter().append("text")
    //     .attr("x", function (d) { return x(d.Series_Title) + x.bandwidth() / 2; })
    //     .attr("y", function (d) { return y(d.Gross) + (height - y(d.Gross)) / 2; })
    //     .style("opacity", 0)
    //     .transition()
    //     .duration(750)
    //     .text(function (d) { return d.Series_Title; })
    //     .attr("class", "label")
    //     .attr("x", function (d) { return x(d.Series_Title) + x.bandwidth() / 2; })
    //     .attr("y", function (d) { return y(d.Gross) + (height - y(d.Gross)) / 2; })
    //     .style("opacity", 1);

    // EXIT.
    labels.exit()
        .transition()
        .duration(750)
        .style("opacity", 0)
        .remove();

    ////////////////////////////////
    // x_axis.                 
    xAxis = d3.axisBottom()
        .scale(x);
    svg.select(".x_axis")
        .transition()
        .duration(750)
        .call(xAxis)
        .selectAll('text')  
        .attr('text-anchor', 'start')
        .attr('transform', 'rotate(25)');
    // y_axis. 
    svg.select(".y_axis")
        .call(yAxis);

    ////////////////////////////////
    // title.   
    // var titles = svg.select(".title")              
    //     .transition()
    //     .duration(750)
    //     .text("Gross Revenue of" + mode +  ":" + sort + " order")
}

function transitionBars() {
    var transition = svg.transition()
        .duration(750);

    transition.selectAll(".bar")
        .attr("x", function (d) {
            return x(d.Series_Title);
        });

    transition.selectAll(".label")
        .attr("x", function (d) {
            return x(d.Series_Title) + x.bandwidth() / 2;
        });

    transition.select(".x_axis").call(xAxis);
    transition.select(".y_axis").call(yAxis);
    
    transition.select(".title")
        .text("Gross Revenue " + mode +  ":" + sort + " order");
}

function drawBars() {
    x.domain(dataset.map(function (d) { return d.Series_Title; }))
        .range([0, width])
        .padding(0.05);

    y.domain([0, d3.max(dataset, function (d) { return d.Gross; })])
        .range([height, 0]);

    svg.selectAll(".bar")
        .data(dataset, function (d) { return d.Series_Title; })
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.Series_Title); })
        .attr("y", function (d) { return y(d.Gross); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.Gross); });

    
    xAxis = d3.axisBottom()
        .scale(x);

    svg.append("g")
        .attr("class", "x_axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll('text')
        .attr('text-anchor', 'start')
        .attr('transform', 'rotate(25)');

    svg.append("text")
        .attr("class", "xlabel")
        .text("Movie")
        .attr("x", width/2)
        .attr("y", height + 70)
        .style("baseline-shift", "nomal")

    //yAxis;
    yAxis = d3.axisLeft()
        .scale(y)
        .ticks(5, 'd');

    svg.append("g")
        .attr("class", "y_axis")
        .call(yAxis);

    svg.append("text")
        .attr('class', 'ylabel')
        .text("Gross Revenue in $")
        .attr("x", - height / 3)
        .attr("y", - margin.left * 0.7)
        .attr("transform", "rotate(-90)")
        .style("baseline-shift", "nomal")
    
    //title
    svg.append("text")
        .attr("class", "title")
        .text("Gross Revenue of Movies in Alphabetical Order")
        .attr("x", width/2)
        .attr("y", -20)
        .style("baseline-shift", "nomal")
}

}

  },
  mounted: function () {
    console.log('mounted');
    
    if (!this.$store.state.htmlChartData) {
        this.myRevenue();
        
    } else {
      this.myRevenue();
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