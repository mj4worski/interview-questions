import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import './PieChart.css';

const PieChar = ({ goodAnswers, badAnswers, withoutAnswers, title }) => (
  <div className="pie-chart">
    <div className="pie-chart__title">{title}</div>
    <Pie
      data={{
        labels: ['Good answers', 'Bad answers', 'Without answers'],
        datasets: [
          {
            data: [goodAnswers, badAnswers, withoutAnswers],
            backgroundColor: ['#2474A6', '#F2A30F', '#54a694'],
            hoverBackgroundColor: ['#1A2A40', '#1A2A40', '#1A2A40']
          }
        ]
      }}
    />
  </div>
);

PieChar.propTypes = {
  goodAnswers: PropTypes.number.isRequired,
  badAnswers: PropTypes.number.isRequired,
  withoutAnswers: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default PieChar;
