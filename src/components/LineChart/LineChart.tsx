import * as React from "react";
import * as d3 from "d3";

import Axis from '../Axis/Axis';

/**
 * Generates a component using d3 calculations
 * TODO: fix JSDoc as the params are props
 * @function BarChart
 * @param {Number} x - x coord for starting point
 * @param {Number} y - y coord for starting point
 * @param {Number} width - width of chart
 * @param {Number} height - height of chart
 * @param {Object[]} data - dataset for charting
 * @param {Number} axisMargins - margins for axis
 * @param {String} color - color for bar
 * @param {Number} barPadding - spacing between bars
 * @returns Rendered BarChart
 */
const LineChart = ({ x, y, width, height, data, axisMargins, color }) => {
  /**
   * Horizontal scale used to calc bar width
   * Map data items to the chart's width
   * @function xScale
   * @param {Number} x - value of x
   * @returns calculated width
   * -------------------------------
   * .scaleBand - divides domain evenly (length) or continuous range [start, end]
   * .domain - dataset range used to map to chart range
   * .range - chart range converts to pixels
   */
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.x))
    .range([0, width])

  /**
   * Vertical scale used to calc bar height
   * Take max y value and map to height of chart
   * @function yScale
   * @param {Number} y - value of y
   * @returns calculated height
   * -----------------------------
   * .scaleLinear - linear relationship between input and output
   * .domain - dataset range used to map to chart range
   * .range - chart range converts to pixels
   *          pixels start from (0,0) so it is inverted
   *          take chart height - margin bottom to margin top to get range
   */
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([height - axisMargins.bottom, axisMargins.top]);

  // TODO: Refactor LineChart and BarChart as they both use the same Axis (custom hook?)
  return (
    <g className="line-chart" transform={`translate(${x}, ${y})`}>
      <Axis
        x={axisMargins.left}
        y={axisMargins.top + axisMargins.bottom}
        pos="Left"
        scale={yScale}
      />
      <Axis
        x={axisMargins.left}
        y={height + axisMargins.bottom}
        pos="Bottom"
        scale={xScale}
      />
    </g>
  )
};

export default LineChart;