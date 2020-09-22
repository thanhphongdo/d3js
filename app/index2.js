import * as d3 from 'd3';
window.d3 = d3;

d3.csv('xyz.csv').then(d => {
    console.log(d);
})

// var data = Object.assign(d3.csvParse("aapl.csv", d3.autoType).map(({date, close}) => {
//     console.log(111);
//     return {date, value: close};
// }), {y: "↑ Close $"});

// var margin = {top: 10, right: 30, bottom: 90, left: 40},
//     width = 460 - margin.left - margin.right,
//     height = 450 - margin.top - margin.bottom;

// var svg = d3.select("#chart")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform",
//         "translate(" + margin.left + "," + margin.top + ")");

// var data = [{"Country": "United States", "Value": "12394"}, {"Country": "Russia", "Value": "6148"}, {"Country": "Germany (FRG)", "Value": "1653"}, {"Country": "France", "Value": "2162"}, {"Country": "United Kingdom", "Value": "1214"}, {"Country": "China", "Value": "1131"}, {"Country": "Spain", "Value": "814"}, {"Country": "Netherlands", "Value": "1167"}, {"Country": "Italy", "Value": "660"}, {"Country": "Israel", "Value": "1263"}];
// var x = d3.scaleBand()
//     .range([0, width])
//     .domain(data.map(function (d) {return d.Country;}))
//     .padding(0.2); 
// svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x))
//     .selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-45)")
//     .style("text-anchor", "end");

// var y = d3.scaleLinear()
//     .domain([0, d3.max(data, d => parseFloat(d.Value))])
//     .range([height, 0]);
// svg.append("g")
//     .call(d3.axisLeft(y));

// svg.selectAll("mybar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("x", function (d) {return x(d.Country);})
//     .attr("width", x.bandwidth())
//     .attr("fill", "#69b3a2")
//     .attr("height", function (d) {return height - y(0);}) // always equal to 0
//     .attr("y", function (d) {return y(0);})

// svg.selectAll("rect")
//     .transition()
//     .ease(d3.easeBounce)
//     .duration(800)
//     .attr("y", function (d) {return y(d.Value);})
//     .attr("height", function (d) {return height - y(d.Value);})
//     .delay(function (d, i) {console.log(i); return (i * 100)})

// var data = [{year: 2000, value: 10}, {year: 2001, value: 8}, {year: 2002, value: 7}, {year: 2003, value: 16}, {year: 2004, value: 6}]
// var svg = d3.select("svg"),
//     margin = 200,
//     width = svg.attr("width") - margin,
//     height = svg.attr("height") - margin

// svg.append("text")
//     .attr("transform", "translate(100,0)")
//     .attr("x", 50)
//     .attr("y", 50)
//     .attr("font-size", "24px")
//     .text("XYZ Foods Stock Price")

// var xScale = d3.scaleBand().range([0, width]).padding(0.4),
//     yScale = d3.scaleLinear().range([height, 0]);

// var g = svg.append("g")
//     .attr("transform", "translate(" + 100 + "," + 100 + ")");

// xScale.domain(data.map(function (d) {return d.year;}));
// yScale.domain([0, d3.max(data, function (d) {return d.value;})]);

// g.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(xScale))
//     .append("text")
//     .attr("y", height - 250)
//     .attr("x", width - 100)
//     .attr("text-anchor", "end")
//     .attr("stroke", "black")
//     .text("Year");

// g.append("g")
//     .call(d3.axisLeft(yScale).tickFormat(function (d) {
//         return "$" + d;
//     })
//         .ticks(10))
//     .append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 6)
//     .attr("dy", "-5.1em")
//     .attr("text-anchor", "end")
//     .attr("stroke", "black")
//     .text("Stock Price");

// var bar = g.selectAll(".bar")
//     .data(data)
//     .enter().append("rect")
//     .attr("class", "bar")
//     .attr("transform", "rotate(-180)")
//     .attr("x", function (d) {return xScale(d.year);})
//     .attr("y", function (d) {return yScale(d.value);})
//     .attr("width", xScale.bandwidth())
//     .attr("height", function (d) {return 0});

// bar.transition()
//     .ease(d3.easeBounce)
//     .duration(1000)
//     .attr("height", function (d) {
//         return height - yScale(d.value);
//     });

// var data = [5, 10, 12, 8, 22, 11, 15, 16, 14, 10];
// function rawChart(ease) {
//     d3.select('svg').remove();
//     var width = 500,
//         scaleFactor = 5,
//         barHeight = 20;

//     var graph = d3.select("body")
//         .append("svg")
//         .attr("width", width)
//         .attr("height", barHeight * data.length + 30);

//     var scale = d3.scaleLinear()
//         .domain([d3.min(data), d3.max(data)])
//         .range([5, 500]);

//     var x_axis = d3.axisBottom()
//         .scale(scale);

//     graph.append("g")
//         .attr("y", 500)
//         .attr("x", 210)
//         .attr("transform", "translate(0," + 210 + ")")
//         .call(x_axis);

//     var bars = graph.append("g");

//     var bar = bars.selectAll("g")
//         .data(data)
//         .enter()
//         .append("g")
//         .attr("transform", function (d, i) {
//             return "translate(0," + i * barHeight + ")";
//         });

//     var rect = bar.append("rect")
//         .attr("width", function (d) {
//             return 0;
//         })
//         .attr("height", barHeight - 1);

//     rect.transition()
//         .ease(ease)
//         .duration(1000)
//         .attr("width", function (d) {
//             // return d * scaleFactor;
//             return scale(d);
//         });

//     bar.append("text")
//         .attr("x", function (d) {return (scale(d) - 5);})
//         .attr("y", barHeight / 2)
//         .attr("dy", ".35em")
//         .transition()
//         .delay(1200)
//         .text(function (d) {return d;});
// }

// rawChart(d3.easeBounce);

// window.rawChart = rawChart;