import { connect } from 'react-redux';
import QuestionsProvider from './QuestionsProvider';
import { addQuestion } from '../../actions';

const mapStateToProps = ({ questions }) => {
  return { questions };
};

export default connect(mapStateToProps, { addQuestionRequest: addQuestion })(
  QuestionsProvider
);
