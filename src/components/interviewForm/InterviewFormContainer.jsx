import { connect } from 'react-redux';
import InterviewForm from './InterviewForm';
import { addTestResult } from '../../actions';

const mapStateToProps = ({ questions }) => {
  return { questions };
};

export default connect(
  mapStateToProps,
  { onFormSubmit: addTestResult }
)(InterviewForm);
