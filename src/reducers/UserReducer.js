const initialState = {
  registrationSuccessful: null,
  userDetails: {},
  loggedIn: false
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_REGISTRATION_SUCCESS":
      const updatedRegistrationState = Object.assign({}, state, {
        registrationSuccessful: action.user.registrationSuccessful
      });
      return updatedRegistrationState;

    case "ADD_LOGGED_IN_USER_TO_STORE":
      const updatedLoggedInUserState = Object.assign({}, state, {
        userDetails: action.userDetails
      });
      return updatedLoggedInUserState;

    case "UPDATE_LOGGED_IN_STATUS":
      const updatedLoggedInStatusState = Object.assign({}, state, {
        loggedIn: action.loggedIn
      });
      return updatedLoggedInStatusState;

    default:
      return state;
  }
}

export default userReducer;
