const testResult = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TEST_RESULT':
      return action.testResult;
    default:
      return state;
  }
};

export default testResult;
