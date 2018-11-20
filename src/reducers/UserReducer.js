const initialState = {
  userId: null,
  userName: "",
  loggedIn: false
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_LOGGED_IN_USER":
      const loggedInUserState = Object.assign({}, state, {
        userId: action.user.id,
        userName: action.user.firstName,
        loggedIn: true
      });
      return loggedInUserState;
    default:
      return state;
  }
}

export default userReducer;
