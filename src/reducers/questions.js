import questionsData from '../questions';

const questions = (state = questionsData, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      const { question: questionFromAction } = action;
      const shouldUpdate = state.some(
        question => question.id === questionFromAction.id
      );
      if (shouldUpdate) {
        return state.map(
          question =>
            question.id === questionFromAction.id
              ? Object.assign({}, question, questionFromAction)
              : question
        );
      }
      return [...state, questionFromAction];
    default:
      return state;
  }
};

export default questions;
