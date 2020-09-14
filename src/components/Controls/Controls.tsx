import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgrey;
`;

const ALL_CHARTS = ['bar', 'line'];

/**
 * Generates a Controls component to update the charts
 * @function Controls
 * @returns Controls component
 */
const Controls = ({ updateDataView, chartControls }) => {
  const { width, height, color, type } = chartControls;

  const makeSelection = (picked, prop) => {
    updateDataView(picked, prop);
  };

  const renderedChartTypes = ALL_CHARTS.map((chart) => {
    return (
      <Button
        label={chart.toUpperCase()}
        name={chart}
        active={type === chart}
        key={chart}
        onClick={makeSelection}
        category='type'
      />
    );
  });

  return (
    <ControlsContainer>
      <h3>Controls</h3>
      <div className='buttons'>
        <h4>Chart Type:</h4>
        {renderedChartTypes}
      </div>
      <div className='dimensions'>
        <h4>Chart Dimensions:</h4>
        <label>Height</label>
        <input
          type='text'
          value={height}
          onChange={(e) => makeSelection(e.target.value, 'height')}
        />
        <label>Width</label>
        <input
          type='text'
          value={width}
          onChange={(e) => makeSelection(e.target.value, 'width')}
        />
      </div>
      <div className='theme'>
        <h4>Chart Colors:</h4>
        <label>Bar</label>
        <input
          type='text'
          value={color}
          onChange={(e) => makeSelection(e.target.value, 'color')}
        />
      </div>
    </ControlsContainer>
  );
};

export default Controls;
