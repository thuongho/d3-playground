import * as React from 'react';

/**
 * Returns a rendered Bar component
 * @function Bar
 * @property {Number} x - x coord
 * @property {Number} y - y coord
 * @property {Number} width - bar width
 * @property {Number} height - bar height
 * @property {String} color - bar fill / color
 */
const Bar = ({ x, y, width, height, color }) => {
  return (
    <g className='bar' transform={`translate(${x}, ${y})`}>
      <rect width={width} height={height} fill={color} stroke='lightblue' />
    </g>
  );
};

export default Bar;
