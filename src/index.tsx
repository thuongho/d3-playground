import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

import BarChart from './components/BarChart/BarChart';
import LineChart from './components/LineChart/LineChart';
import Controls from './components/Controls/Controls';

import './styles.css';

/** 
 * Deliverables
  • Draw user supplied data at a suitable size onto the page.
	• Draw axis and axis ticks showing the ranges.
	• Allow the user to specify a chart width and height.
	• Allow the user to specify bar chart vs line chart.
	• Allow the user to specify the color of the chart. Up to you to define the format (CSS strings, hex, rgb, etc.).
	• You can use any method you want to do the actual drawing - svg, canvas, or anything else.
*/
const myData1 = [
  { x: 0, y: 40 },
  { x: 1, y: 20 },
  { x: 2, y: 40 },
  { x: 3, y: 20 },
  { x: 4, y: 40 }
];

const myData2 = [
  { x: 'USA', y: 193 },
  { x: 'Canada', y: 46 },
  { x: 'UK', y: 320 },
  { x: 'China', y: 341 },
  { x: 'South Africa', y: 88 }
];

function App() {
  /**
   * States
   * data - data for the charts
   * dimensions - setting chart size
   * chartType - user controls for selecting chart type
   * color - user controls for choosing color
   * axisMargins - margins for the chart
   */
  const [data, setData] = useState([]);
  const [chartControls, setChartControls] = useState({
    width: 500,
    height: 500,
    type: 'bar',
    color: 'steelblue'
  });
  const [axisMargins, setAxisMargins] = useState({
    top: 40,
    left: 40,
    right: 40,
    bottom: 40
  });

  const { type, width, height, color } = chartControls;

  /**
   * Method to update chart attributes that is passed into controls
   * Use as callbacks in Controls to send user interaction to App
   * and update the state
   * @function updateDataView
   * @param {String} update - state
   * @param {String} prop - the updated state type
   * @returns null
   */
  const updateDataView = (update: string, prop: string) => {
    setChartControls({ ...chartControls, [prop]: update });
  };

  /**
   * Fetch and set data on load
   */
  useEffect(() => {
    setData(myData2);
  }, []);

  const renderedChartType = () => {
    if (type === 'bar') {
      return (
        <BarChart
          x={0}
          y={0}
          width={width}
          height={height}
          data={data}
          axisMargins={axisMargins}
          color={color}
        />
      );
    } else {
      return (
        <LineChart
          x={0}
          y={0}
          width={width}
          height={height}
          data={data}
          axisMargins={axisMargins}
          color={color}
        />
      );
    }
  };

  return (
    <div className='App'>
      <div className='chart-holder'>
        <svg width='800' height='600'>
          {renderedChartType()}
        </svg>
      </div>
      <Controls updateDataView={updateDataView} chartControls={chartControls} />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
