import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  padding: 15px;

  h3 {
    text-align: center;
  }

  .groups {
    margin: 15px 0;

    h4 {
      margin: 5px 0;
    }

    label {
      color: gray;
    }

    input {
      display: block;
      border: 1px solid #d3d3d3;
      margin: 10px 0;
      padding: 5px;
      border-radius: 5px;
      font-family: sans-serif;
      font-size: 16px;
    }
  }
`;

const ALL_CHARTS = ['bar', 'line'];

/**
 * Generates a Controls component to update the charts
 * @function Controls
 * @property {Function} updateDataView - updates state on App
 * @property {Object} chartControls - state props
 * @returns Controls component
 */
const Controls = ({ updateDataView, chartControls }) => {
  const { width, height, color, type } = chartControls;

  const makeSelection = (picked: string, prop: string) => {
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
      <div className='groups'>
        <h4>Chart Type:</h4>
        {renderedChartTypes}
      </div>
      <div className='groups'>
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
      <div className='groups'>
        <h4>Chart Colors:</h4>
        <label>{type[0].toUpperCase() + type.substring(1).toLowerCase()}</label>
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
