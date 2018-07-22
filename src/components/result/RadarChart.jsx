import React from 'react';
import { Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Box } from '../common';
import './RadarChart.css';

const stylesForDataSet = {
  backgroundColor: 'rgba(36,116,166,0.2)',
  borderColor: 'rgba(179,181,198,1)',
  pointBackgroundColor: 'rgb(179,181,198,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(179,181,198,1)'
};

const configureDataSet = (data, label) => [
  {
    ...stylesForDataSet,
    data,
    label
  }
];

const RadarChart = ({ categories, data, label }) => {
  return (
    <Box className="radar-chart">
      <Radar
        data={{
          labels: categories,
          datasets: configureDataSet(data, label)
        }}
      />
    </Box>
  );
};

RadarChart.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.number),
  label: PropTypes.string
};

export default RadarChart;
