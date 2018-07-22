import React from 'react';
import PieChart from './PieChart';
import './Result.css';

const initPossibilityResult = {
  goodAnswers: 0,
  badAnswers: 0,
  withoutAnswers: 0
};

const checkAnswer = (answer, checkedResults, category) => {
  if (answer !== null) {
    if (answer.correct) {
      checkedResults[category].goodAnswers += 1;
    } else {
      checkedResults[category].badAnswers += 1;
    }
  } else {
    checkedResults[category].withoutAnswers += 1;
  }
  return checkedResults;
};

const checkTestResults = testResult => {
  //TODO:: Separate structure mapping to separate function
  return Object.keys(testResult).reduce((checkedResults, questionId) => {
    const { category, answer } = testResult[questionId];

    if (checkedResults[category]) {
      return checkAnswer(answer, checkedResults, category);
    }
    checkedResults[category] = Object.assign({}, initPossibilityResult);
    return checkAnswer(answer, checkedResults, category);
  }, {});
};

const Result = ({ testResult }) => {
  const checkedTestResult = checkTestResults(testResult);
  return (
    <div className="result">
      {Object.keys(checkedTestResult).map(category => {
        const { goodAnswers, badAnswers, withoutAnswers } = checkedTestResult[
          category
        ];
        return (
          <PieChart
            goodAnswers={goodAnswers}
            badAnswers={badAnswers}
            withoutAnswers={withoutAnswers}
            title={category}
            key={category}
          />
        );
      })}
    </div>
  );
};

export default Result;
