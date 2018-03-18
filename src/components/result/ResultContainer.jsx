import { connect } from 'react-redux';
import Result from './Result';

function mapStateToProps(state) {
  return { answers: state.answers };
}

export default connect(mapStateToProps, null)(Result);
