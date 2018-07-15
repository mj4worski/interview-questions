import { connect } from 'react-redux';
import QuestionsProvider from './QuestionsProvider';

const mapStateToProps = ({ questions }) => {
  return { questions };
};

export default connect(mapStateToProps, null)(QuestionsProvider);
