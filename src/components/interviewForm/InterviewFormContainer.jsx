import { connect } from 'react-redux';
import InterviewForm from './InterviewForm';
import { addAnswers } from '../../actions';

const mapStateToProps = ({ questions }) => {
  return { questions };
};

export default connect(mapStateToProps, { onFormSubmit: addAnswers })(
  InterviewForm
);
