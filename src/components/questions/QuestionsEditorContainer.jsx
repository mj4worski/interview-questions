import { connect } from 'react-redux';
import QuestionsEditor from './QuestionsEditor';
import { addQuestion } from '../../actions';

const mapStateToProps = ({ questions }) => {
  return { questions };
};

export default connect(mapStateToProps, { addQuestionRequest: addQuestion })(
  QuestionsEditor
);
