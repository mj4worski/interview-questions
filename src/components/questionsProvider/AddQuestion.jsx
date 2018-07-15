import React, { PureComponent } from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';
import { Box, Button } from '../common';
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
    category: []
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
        <label className="add-question__input-label">
          New Question
          <input
            className="add-question__input"
            type="text"
            placeholder="Provide new question"
          />
        </label>
        <label className="add-question__select-label">
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
        <Button className="add-question__button">Submit</Button>
      </Box>
    );
  }
}
