import * as React from "react";

/**
 * Returns a rendered Bar component
 * @function Bar
 * @param {Number} x - x coord
 * @param {Number} y - y coord
 * @param {Number} width - bar width
 * @param {Number} height - bar height
 * @param {String} color - bar fill / color
 */
const Bar = ({ x, y, width, height, color }) => {
  return (
    <g className="bar" transform={`translate(${x}, ${y})`}>
      <rect width={width} height={height} fill={color} stroke="lightblue" />
    </g>
  );
};

export default Bar;
