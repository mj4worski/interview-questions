import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';
import { addQuestion } from '../../actions';

export default connect(null, { addQuestionRequest: addQuestion })(QuestionForm);
