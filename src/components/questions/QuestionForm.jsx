import React, { PureComponent } from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';
import { Box, Button, RadioButton } from '../common';
import 'react-select/dist/react-select.css';
import './QuestionForm.css';

const toValueLabelObject = category => {
  return {
    value: category,
    label: category
  };
};

export default class QuestionForm extends PureComponent {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    addQuestionRequest: PropTypes.func
  };

  state = {
    category: '',
    answers: [],
    question: ''
  };

  handleCategoryOnChange = ({ value }) => {
    this.setState({ category: value });
  };

  handleQuestionInputOnChange = event => {
    this.setState({ question: event.target.value });
  };

  handleClickOnAddAnswerButton = () => {
    if (this.answerInputRef.value) {
      this.setState(prevState => {
        const answer = this.answerInputRef.value;
        const correct = this.answerCheckbox.checked;
        this.answerInputRef.value = '';
        this.answerCheckbox.checked = false;
        return {
          answers: [...prevState.answers, { answer, correct }]
        };
      });
    }
  };

  handleAnswerInputRef = ref => {
    this.answerInputRef = ref;
  };

  handleAnswerCheckbox = ref => {
    this.answerCheckbox = ref;
  };

  handleOnSubmit = () => {
    const { answers, category, question } = this.state;
    this.props.addQuestionRequest({ answers, category, question });
  };

  render() {
    const { categories } = this.props;
    const { category, answers } = this.state;

    return (
      <Box className="question-form">
        <div className="layout-body">
          <div className="layout-body__first-row">
            <label className="question-form__label">
              New Question
              <input
                className="question-form__input"
                type="text"
                placeholder="Provide new question"
                onChange={this.handleQuestionInputOnChange}
              />
            </label>
            <label className="question-form__label question-form__label--small">
              Categories
              <Creatable
                options={categories.map(toValueLabelObject)}
                onChange={this.handleCategoryOnChange}
                value={category}
                showNewOptionAtTop
                className="question-form__select"
                removeSelected
              />
            </label>
          </div>
          <div className="layout-body__second-row">
            <label className="question-form__label">
              Add answer
              <input
                className="question-form__input"
                type="text"
                placeholder="Provide answer"
                ref={this.handleAnswerInputRef}
              />
            </label>
            <label className="question-form__label question-form__label--small">
              Is correct answer ?
              <RadioButton innerRef={this.handleAnswerCheckbox} />
            </label>
            <Button
              className="question-form__button"
              onClick={this.handleClickOnAddAnswerButton}
            >
              Add answer
            </Button>
          </div>
        </div>

        <div>
          <ul>{answers.map(({ answer }) => <li key={answer}>{answer}</li>)}</ul>
        </div>

        <div className="layout-footer">
          If you do not want to add anything else click button next to the
          message ;)
          <Button
            className="question-form__button"
            onClick={this.handleOnSubmit}
          >
            Submit
          </Button>
        </div>
      </Box>
    );
  }
}
