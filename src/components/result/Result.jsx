import React, {Fragment} from 'react';
import './Result.css';

const Result = ({answers}) => (
  <div className="result">
    {
      answers.map(({question, answer}) => (
        <Fragment key={answer}>
          <div>{question}</div>
          <div>{answer}</div>
        </Fragment>
        )
      )
    }
  </div>
);

export default Result;