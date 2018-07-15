import { combineReducers } from 'redux';
import answers from './answers';
import questions from './questions';

export default combineReducers({
  answers,
  questions
});
