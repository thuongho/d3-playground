import * as React from 'react';
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

/**
 * Generates an Axis component using d3
 * @function Axis
 * @property {Number} x - x coord
 * @property {Number} y - y coord
 * @property {String} pos - position of the axis
 * @property {Function} scale - d3 scale for scaling the axis
 * @returns Axis component
 */
const Axis = ({ x, y, pos, scale }) => {
  /**
   * Reference DOM so that React can update it
   */
  const gRef = useRef();

  /**
   * Render method that gets the referenced DOM and uses d3
   * to render the updated axis position and scale (size)
   * It calls axisTop, axisRight, axisBottom or axisLeft
   * @function d3Render
   * @returns null
   */
  const d3Render = () => {
    d3.select(gRef.current).call(d3[`axis${pos}`](scale));
  };

  /**
   * Render Axis component when scale and position updates
   */
  useEffect(() => {
    d3Render();
  }, [scale, pos]);

  return <g ref={gRef} transform={`translate(${x}, ${y})`}></g>;
};

export default Axis;
