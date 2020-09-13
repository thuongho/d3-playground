import React, { useState } from 'react';
import styled from 'styled-components';

const CircleContainer = styled.circle`
  fill: steelblue;
  fill-opacity: 0.7;
  stroke: steelblue;
  stroke-width: 1px;
`;

const Circle = ({ x, y, r }) => {
  const [radius, setRadius] = useState(r | 3);

  return <CircleContainer cx={x} cy={y} r={radius} />;
};

export default Circle;
