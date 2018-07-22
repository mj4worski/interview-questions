import { combineReducers } from 'redux';
import testResult from './testResult';
import questions from './questions';

export default combineReducers({
  testResult,
  questions
});
