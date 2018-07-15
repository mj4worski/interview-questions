import questionsData from '../questions';

const questions = (state = questionsData, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [...state, action.question];
    default:
      return state;
  }
};

export default questions;
