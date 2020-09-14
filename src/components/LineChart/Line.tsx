import * as React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const PathContainer = styled.path`
  /* fill none to prevent d3 filling in overlap area */
  fill: none;
  fill-opacity: 0.7;
  stroke: steelblue;
  stroke-width: 1px;
`;

/**
 * Generate a line component using d3 calculations
 * @function Line
 * @property {Number} width - width of chart
 * @property {Number} height - height of chart
 * @property {Object[]} data - dataset for charting
 * @property {Number} axisMargins - margins for axis
 * @property {String} color - line color
 * @retunrs Rendered Line
 */
const Line = ({ data, axisMargins, xScale, yScale, color }) => {
  const { top, right, bottom, left } = axisMargins;

  /**
   * d3 method to draw a line based on the dataset
   * @function line
   * @param {Oject[]} data - dataset with x and y values
   * @returns calculated path attributes to draw a line
   * --------------------------------------------------
   * .curveCardinal - produces a cubic cardinal spline using specific control points
   */
  const line = d3
    .line()
    .curve(d3.curveCardinal)
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));

  return (
    <g
      className='line'
      transform={`translate(${left + right}, ${top + bottom})`}
    >
      <PathContainer d={line(data)} style={{ stroke: color }} />
    </g>
  );
};

export default Line;
