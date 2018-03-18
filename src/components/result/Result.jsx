import React from 'react';
import {groupBy} from 'lodash';
import PieChart from './PieChart';
import './Result.css';

const Result = ({answers}) => {
  const groupedByCategory = groupBy(answers, 'category');
  return (
    <div className="result">
      {
        Object.keys(groupedByCategory).map(category => {
          let answersInCategory = groupedByCategory[category];
          let goodAnswers = 0, badAnswers = 0;
          answersInCategory.forEach(answer => {
            if (answer.correct) {
              goodAnswers += 1;
            } else {
              badAnswers += 1;
            }
          });
          return <PieChart goodAnswers={goodAnswers} badAnswers={badAnswers}/>
        })
      }
    </div>
  )
};

export default Result;