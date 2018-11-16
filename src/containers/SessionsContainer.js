import { connect } from "react-redux";
import Sessions from "../components/Sessions";
import { getSessions } from "../actions";

export const mapStateToProps = state => {
  return {
    sessions: state.sessionsReducer
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getSessionsOnMount: () => dispatch(getSessions())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sessions);
