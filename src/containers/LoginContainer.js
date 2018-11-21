import { connect } from "react-redux";
import Login from "../components/Login";
import { sendLoginToDb } from "../actions";

export const mapStateToProps = state => {
  console.log(state.UserReducer.loggedIn);
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {
    sendLoginUserInfo: values => {
      dispatch(sendLoginToDb(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
