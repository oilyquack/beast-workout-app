import { connect } from "react-redux";
import UserEntry from "../components/UserEntry";
import { registerUserToDb } from "../actions";

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {
    sendRegisterUserInfo: values => {
      dispatch(registerUserToDb(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEntry);
