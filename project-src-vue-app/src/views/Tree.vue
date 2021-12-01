<template>
  <div id="app">
    <h2> And the the Oscar goes too....</h2>
    <div id="codepen"></div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "CodePen",
  data() {
    return {
      chartData: null,
    };
  },
  mounted() {
    // create the map after the component is mounted
    this.createCodePen();
  },
  methods: {
    createCodePen() {
      var treeData =
  {
    "name": "Oscars",
"children": [
    {
        "name": "Best Director",
        "children": [
            {
                "name": "Joel Coen",
                "children": [
                    {
                        "name": "No Country for Old Men"
                    },
                    {
                        "name": "2008"
                    }                
                ]
                
            },
            {
                "name": "Roman Polanski",
                "children": [
                    {
                        "name": "The Pianist"
                    },
                    {
                        "name": "2003"
                    }                
                ]
                
            },
            {
                "name": "Peter Jackson",
                "children": [
                    {
                        "name": "The Lord of the Rings: Return of the King"
                    },
                    {
                        "name": "2004"
                    }                
                ]
                
            },
            {
                "name": "Clint Eastwood",
                "children": [
                    {
                        "name": "Million Dollar Baby"
                    },
                    {
                        "name": "2005"
                    }                
                ]
                
            },
            {
                "name": "Ang Lee",
                "children": [
                    {
                        "name": "Brokeback Mountain"
                    },
                    {
                        "name": "2006"
                    }                
                ]
                
            },
            {
                "name": "Martin Scorsese",
                "children": [
                    {
                        "name": "The Departed"
                    },
                    {
                        "name": "2007"
                    }                
                ]
                
            },
            {
                "name": "Danny Boyle",
                "children": [
                    {
                        "name": "Slumdog Millionaire"
                    },
                    {
                        "name": "2009"
                    }                
                ]
                
            },
            {
                "name": "Tom Hooper",
                "children": [
                    {
                        "name": "The King's Speech"
                    },
                    {
                        "name": "2011"
                    }                
                ]
                
            },
            

            
        ]
    },
    {
        "name": "Best Actor",
        "children": [
            {
                "name": "Adrien Brody",
                "children": [
                    {
                        "name": "The Pianist"
                    },
                    {
                        "name": "2003"
                    }                
                ]
                
            },
            {
                "name": "Sean Penn",
                "children": [
                    {
                        "name": "Mystic River"
                    },
                    {
                        "name": "2004"
                    }                
                ]
                
            },
            {
                "name": "Jamie Foxx",
                "children": [
                    {
                        "name": "Ray"
                    },
                    {
                        "name": "2005"
                    }                
                ]
                
            },
            {
                "name": "Philip Seymour Hoffman",
                "children": [
                    {
                        "name": "Capote"
                    },
                    {
                        "name": "2006"
                    }                
                ]
                
            },
            {
                "name": "Forest Whitaker",
                "children": [
                    {
                        "name": "The Last King of Scotland"
                    },
                    {
                        "name": "2007"
                    }                
                ]
                
            },
            {
                "name": "Daniel Day-Lewis",
                "children": [
                    {
                        "name": "There Will Be Blood"
                    },
                    {
                        "name": "2008"
                    }                
                ]
                
            },
            {
                "name": "Sean Penn",
                "children": [
                    {
                        "name": "Milk"
                    },
                    {
                        "name": "2009"
                    }                
                ]
                
            },
            {
                "name": "Colin Firth",
                "children": [
                    {
                        "name": ""
                    },
                    {
                        "name": "2011"
                    }                
                ]
                
            },
            

            
        ]
    },

    {
        "name": "Best Actress",
        "children": [
            {
                "name": "Nicole Kidman",
                "children": [
                    {
                        "name": "The Hours"
                    },
                    {
                        "name": "2003"
                    }                
                ]
                
            },
            {
                "name": "Charlize Theron",
                "children": [
                    {
                        "name": "Monster"
                    },
                    {
                        "name": "2004"
                    }                
                ]
                
            },
            {
                "name": "Hilary Swank",
                "children": [
                    {
                        "name": "Million Dollar Baby"
                    },
                    {
                        "name": "2005"
                    }                
                ]
                
            },
            {
                "name": "Reese Witherspoon",
                "children": [
                    {
                        "name": "Walk the Line"
                    },
                    {
                        "name": "2006"
                    }                
                ]
                
            },
            {
                "name": "Helen Mirren",
                "children": [
                    {
                        "name": "The Queen"
                    },
                    {
                        "name": "2007"
                    }                
                ]
                
            },
            {
                "name": "Marion Cotillard",
                "children": [
                    {
                        "name": "The Passionate Life of Edith Piaf"
                    },
                    {
                        "name": "2008"
                    }                
                ]
                
            },
            {
                "name": "Kate Winslet",
                "children": [
                    {
                        "name": "The Reader"
                    },
                    {
                        "name": "2009"
                    }                
                ]
                
            },
            {
                "name": "Natalie Portman",
                "children": [
                    {
                        "name": "Black Swan"
                    },
                    {
                        "name": "2011"
                    }                
                ]
                
            },
            

            
        ]
    },
    {
        "name": "Best Supporting Actor",
        "children": [
            {
                "name": "Chris Cooper",
                "children": [
                    {
                        "name": "Adaptation"
                    },
                    {
                        "name": "2003"
                    }                
                ]
                
            },
            {
                "name": "Tim Robbins",
                "children": [
                    {
                        "name": "Mystic River"
                    },
                    {
                        "name": "2004"
                    }                
                ]
                
            },
            {
                "name": "Morgan Freeman",
                "children": [
                    {
                        "name": "Million Dollar Baby"
                    },
                    {
                        "name": "2005"
                    }                
                ]
                
            },
            {
                "name": "George Clooney",
                "children": [
                    {
                        "name": "Syriana"
                    },
                    {
                        "name": "2006"
                    }                
                ]
                
            },
            {
                "name": "Alan Arkin",
                "children": [
                    {
                        "name": "Little Miss Sunshine"
                    },
                    {
                        "name": "2007"
                    }                
                ]
                
            },
            {
                "name": "Javier Bardem",
                "children": [
                    {
                        "name": "No Country for Old Men"
                    },
                    {
                        "name": "2008"
                    }                
                ]
                
            },
            {
                "name": "Heath Ledger",
                "children": [
                    {
                        "name": "The Dark Knight"
                    },
                    {
                        "name": "2009"
                    }                
                ]
                
            },
            {
                "name": "Christian Bale",
                "children": [
                    {
                        "name": "The Fighter"
                    },
                    {
                        "name": "2011"
                    }                
                ]
                
            },
            

            
        ]
    },

        {
        "name": "Best Supporting Actress",
        "children": [
            {
                "name": "Catherine Zeta-Jones",
                "children": [
                    {
                        "name": "Chicago"
                    },
                    {
                        "name": "2003"
                    }                
                ]
                
            },
            {
                "name": "Renee Zellweger",
                "children": [
                    {
                        "name": "Cold Mountain"
                    },
                    {
                        "name": "2004"
                    }                
                ]
                
            },
            {
                "name": "Cate Blanchett",
                "children": [
                    {
                        "name": "The Aviator"
                    },
                    {
                        "name": "2005"
                    }                
                ]
                
            },
            {
                "name": "Rachel Weisz",
                "children": [
                    {
                        "name": "The Constant Gardener"
                    },
                    {
                        "name": "2006"
                    }                
                ]
                
            },
            {
                "name": "Jennifer Hudson",
                "children": [
                    {
                        "name": "Dreamgirls"
                    },
                    {
                        "name": "2007"
                    }                
                ]
                
            },
            {
                "name": "Tilda Swinton",
                "children": [
                    {
                        "name": "Michael Clayton"
                    },
                    {
                        "name": "2008"
                    }                
                ]
                
            },
            {
                "name": "Penelope Cruz",
                "children": [
                    {
                        "name": "Vicky Cristina Barcelona"
                    },
                    {
                        "name": "2009"
                    }                
                ]
                
            },
            {
                "name": "Melissa Leo",
                "children": [
                    {
                        "name": "The Fighter"
                    },
                    {
                        "name": "2011"
                    }                
                ]
                
            },
            

            
        ]
    },
    
]
  };

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#codepen").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");

var i = 0,
    duration = 750,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 180});

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function() {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      });

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
    })
    .attr('cursor', 'pointer');


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function() {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function() {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      linkExit.remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

  var  path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(event, d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }
}
    },
  },
};
</script>

 <style>
.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 7px;
}

.node text {
  font: 18px sans-serif;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
</style>