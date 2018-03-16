const answers = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ANSWERS':
      return [
        ...action.answers
      ];
    default:
      return state;
  }
};

export default answers;