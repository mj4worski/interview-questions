import { connect } from 'react-redux';
import InterviewForm from './InterviewForm';
import { addAnswers }from '../../actions';

export default connect(null, {onFormSubmit: addAnswers})(InterviewForm)