// @ts-nocheck
import * as d3 from 'd3';

export const drawScatterPlot = (csvData) => {
  const svgWidth = 1000;
  const svgHeight = 600;

  const margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
  };

  const chartWidth = svgWidth - margin.left - margin.right;
  const chartHeight = svgHeight - margin.top - margin.bottom;

  // Create an SVG wrapper, append an SVG group that will hold our chart,
  // and shift the latter by left and top margins.
  const svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("border", "1px solid black");

  // Append an SVG group
  const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Retrieve data from the CSV file and execute everything below
  d3.csv(csvData).then(function(data, err) {
    if (err) throw err;
    console.log({ data });

    // parse data/cast as numbers
    data.forEach((data) => {
      data.poverty = +data.poverty;
      data.healthcare = +data.healthcare;
    });

    // Create scale functions
    const xLinearScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.poverty))
      .range([0, chartWidth]);

    const yLinearScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.healthcare))
      .range([chartHeight, 0]);

    // Create initial axis functions
    const bottomAxis = d3.axisBottom(xLinearScale);
    const leftAxis = d3.axisLeft(yLinearScale);

    // Append axes to the chart.
    chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);


    const circlesGroup = chartGroup.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xLinearScale(d.poverty))
      .attr("cy", d => yLinearScale(d.healthcare))
      .attr("r", "10")
      .attr("fill", "blue")
      .attr("opacity", ".5")

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (chartHeight / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Lacks Healthcare (%)");

    chartGroup.append("text")
      .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + margin.top + 30})`)
      .attr("class", "axisText")
      .text("In Poverty (%)");

  }).catch(function(error) {
    console.log(error);
  });
}