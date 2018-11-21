import { connect } from "react-redux";
import Nav from "../components/Nav";

export const mapStateToProps = state => {
  return {
    loggedIn: state.UserReducer.loggedIn,
    userName: state.UserReducer.userName,
    userId: state.UserReducer.userId
  };
};

export const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
