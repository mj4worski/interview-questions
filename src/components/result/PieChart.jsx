import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChar = ({ goodAnswers, badAnswers }) => (
  <Pie
    data={{
      labels: ['Good answers', 'Bad answers'],
      datasets: [
        {
          data: [goodAnswers, badAnswers],
          backgroundColor: ['#2474A6', '#F2A30F'],
          hoverBackgroundColor: ['#1A2A40', '#1A2A40']
        }
      ]
    }}
  />
);

export default PieChar;
