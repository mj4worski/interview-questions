import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
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

const convertTestResultToPercentages = testResult => {
  return Object.keys(testResult).map(category => {
    const { goodAnswers, badAnswers, withoutAnswers } = testResult[category];
    return (100 * goodAnswers) / (goodAnswers + badAnswers + withoutAnswers);
  });
};

class Result extends Component {
  static propTypes = {
    testResult: PropTypes.object
  };

  renderPieCharts = resultsToRender => (
    <div className="result-pie-charts">
      {Object.keys(resultsToRender).map(category => {
        const { goodAnswers, badAnswers, withoutAnswers } = resultsToRender[
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

  renderRadarChart = checkedTestResult => {
    const resultsInPercentages = convertTestResultToPercentages(
      checkedTestResult
    );
    const categories = Object.keys(checkedTestResult);
    if (resultsInPercentages.length > 0) {
      return (
        <RadarChart
          label="Percentage result in each category"
          categories={categories}
          data={resultsInPercentages}
        />
      );
    }
    return null;
  };

  render() {
    const { testResult } = this.props;
    const checkedTestResult = checkTestResults(testResult);

    return (
      <div className="result">
        {this.renderPieCharts(checkedTestResult)}
        {this.renderRadarChart(checkedTestResult)}
      </div>
    );
  }
}

export default Result;
