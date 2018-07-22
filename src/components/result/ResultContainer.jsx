import { connect } from 'react-redux';
import Result from './Result';

function mapStateToProps({ testResult }) {
  return { testResult };
}

export default connect(
  mapStateToProps,
  null
)(Result);
