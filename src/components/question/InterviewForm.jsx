import React, {Component} from 'react';
import {getQuestions} from '../../api';
import InterviewQuestion from './InterviewQuestion';

class InterviewForm extends Component {
  state = {
    questions: [],
    userAnswers: [],
  };

  componentDidMount() {
    this.setState({questions: getQuestions()})
  }

  render() {
    const {questions} = this.state;
    if(questions.length > 0){
      return questions.map(({question, answers}) => (
        <InterviewQuestion question={question} answers={answers} key={question}/>
      ))
    }
    return null;
  }
}

export default  InterviewForm;