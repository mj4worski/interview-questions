import React, { PureComponent, Fragment } from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';
import uuid from 'uuid4';
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
  state = {
    category: this.props.categoryValue || '',
    answers: this.props.answersValue || [],
    question: this.props.questionValue || ''
  };

  static propTypes = {
    categories: PropTypes.array.isRequired,
    addQuestionRequest: PropTypes.func,
    questionId: PropTypes.string,
    questionValue: PropTypes.string,
    categoryValue: PropTypes.string,
    answersValue: PropTypes.array
  };

  static defaultProps = {
    questionValue: '',
    categoryValue: '',
    answersValue: []
  };

  handleCategoryOnChange = ({ value }) => {
    this.setState({ category: value });
  };

  handleQuestionInputOnChange = event => {
    this.setState({ question: event.target.value });
  };

  handleAddAnswerButtonOnClick = () => {
    if (this.answerInputRef.value) {
      this.setState(prevState => {
        const answer = this.answerInputRef.value;
        const correct = this.answerCheckbox.checked;
        this.answerInputRef.value = '';
        this.answerCheckbox.checked = false;
        return {
          answers: [...prevState.answers, { answer, correct, id: uuid() }]
        };
      });
    }
  };

  handleAnswerInputOnChange = answerId => event => {
    this.setState({
      answers: this.state.answers.map(
        answer =>
          answer.id === answerId
            ? Object.assign({}, answer, { answer: event.target.value })
            : answer
      )
    });
  };

  handleAnswerInputRef = ref => {
    this.answerInputRef = ref;
  };

  handleAnswerCheckbox = ref => {
    this.answerCheckbox = ref;
  };

  handleOnSubmit = () => {
    const { answers, category, question } = this.state;
    this.props.addQuestionRequest({
      answers,
      category,
      question,
      id: this.props.questionId || uuid()
    });
  };

  renderQuestionAndCategory = () => {
    const { categories, questionValue } = this.props;
    const { category } = this.state;

    return (
      <Fragment>
        <label className="question-form__label">
          New Question
          <input
            className="question-form__input"
            type="text"
            placeholder="Provide new question"
            onChange={this.handleQuestionInputOnChange}
            defaultValue={questionValue}
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
      </Fragment>
    );
  };

  renderAnswer = ({ answer, correct } = {}) => {
    return (
      <Fragment>
        <label className="question-form__label">
          Add answer
          <input
            className="question-form__input"
            type="text"
            placeholder="Provide answer"
            ref={this.handleAnswerInputRef}
            defaultValue={answer}
          />
        </label>
        <label className="question-form__label question-form__label--small">
          Is correct answer ?
          <RadioButton
            innerRef={this.handleAnswerCheckbox}
            defaultChecked={correct}
          />
        </label>
      </Fragment>
    );
  };

  renderAnswers = () => {
    const { answers } = this.state;

    return (
      <ul>
        {answers.map(({ answer, correct, id }) => (
          <li className="question-form-answer-list__answer" key={id}>
            <input
              className="question-form__input"
              type="text"
              placeholder="Provide answer"
              defaultValue={answer}
              onChange={this.handleAnswerInputOnChange(id)}
            />
            <RadioButton defaultChecked={correct} />
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <Box className="question-form">
        <div className="layout-body">
          <div className="layout-body__first-row">
            {this.renderQuestionAndCategory()}
          </div>
          <div className="layout-body__second-row">
            {this.renderAnswer()}
            <Button
              className="question-form__button"
              onClick={this.handleAddAnswerButtonOnClick}
            >
              Add answer
            </Button>
          </div>
        </div>

        <div>
          <h5>Possible answer to the question</h5>
          {this.renderAnswers()}
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
