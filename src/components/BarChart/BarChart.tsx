import * as React from "react";
import * as d3 from "d3";

import Bar from "./Bar";
import Axis from "../Axis/Axis";

/**
 * Generates a component using d3 calculations
 * @function BarChart
 * @param {Number} x - x coord for starting point
 * @param {Number} y - y coord for starting point
 * @param {Number} width - width of chart
 * @param {Number} height - height of chart
 * @param {Object[]} data - dataset for charting
 * @param {Number} axisMargins - margins for axis
 * @param {String} color - color for bar
 * @returns Rendered BarChart
 */
const BarChart = ({ x, y, width, height, data, axisMargins, color }) => {
  /**
   * Horizontal scale used to calc bar width
   * Map data items to the chart's width
   * @function xScale
   * @param {Number} x - value of x
   * @returns calculated width
   */
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.x))
    .range([0, width]);

  /**
   * Vertical scale used to calc bar height
   * Take max y value and map to height of chart
   * @function yScale
   * @param {Number} y - value of y
   * @returns calculated height
   */
  const yScale = d3
    .scaleLinear()
    .domain([d3.max(data, (d) => d.y), 0])
    .range([0, height]);

  // TEST TO BE REMOVED!!
  data.forEach((d) => console.log(yScale(d.y)));

  return (
    <g className="bar-chart" transform={`translate(${x}, ${y})`}>
      <g className="bars">
        {data.map((item, i) => (
          <Bar
            key={`bar-${i}`}
            x={xScale(item.x) + axisMargins.left}
            y={height - yScale(item.y) + axisMargins.top + axisMargins.bottom}
            width={xScale.bandwidth()}
            height={yScale(item.y)}
            color={color}
          />
        ))}
      </g>
      <Axis
        x={axisMargins.left}
        y={axisMargins.top + axisMargins.bottom}
        pos="Left"
        scale={yScale}
      />
    </g>
  );
};

export default BarChart;
