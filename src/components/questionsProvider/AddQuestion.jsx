import React, { PureComponent } from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';
import { Box, Button, RadioButton } from '../common';
import 'react-select/dist/react-select.css';
import './AddQuestion.css';

const toValueLabelObject = category => {
  return {
    value: category,
    label: category
  };
};

export default class AddQuestion extends PureComponent {
  static propTypes = {
    categories: PropTypes.array
  };

  state = {
    category: {}
  };

  handleOnChange = value => {
    console.log(value);
    this.setState({ category: value });
  };

  render() {
    const { categories } = this.props;
    const { category } = this.state;

    return (
      <Box className="add-question">
        <div className="layout-body">
          <div className="layout-body__first-row">
            <label className="add-question__label">
              New Question
              <input
                className="add-question__input"
                type="text"
                placeholder="Provide new question"
              />
            </label>
            <label className="add-question__label add-question__label--small">
              Categories
              <Creatable
                options={categories.map(toValueLabelObject)}
                onChange={this.handleOnChange}
                value={category}
                showNewOptionAtTop
                className="add-question__select"
                removeSelected
              />
            </label>
          </div>
          <div className="layout-body__second-row">
            <label className="add-question__label">
              Add answer
              <input
                className="add-question__input"
                type="text"
                placeholder="Provide answer"
              />
            </label>
            <label className="add-question__label add-question__label--small">
              Is correct answer ?
              <RadioButton />
            </label>
            <Button className="add-question__button">Add answer</Button>
          </div>
        </div>

        <div className="layout-footer">
          If you do not want to add anything else click button next to the
          message ;)
          <Button className="add-question__button">Submit</Button>
        </div>
      </Box>
    );
  }
}
