export function receiveSessions(sessions) {
  return {
    type: "RECEIVE_SESSIONS",
    sessions
  };
}

export function confirmRegistration(success) {
  return {
    type: "ADD_LOGGED_IN_USER",
    registrationSuccessful: success
  };
}

export function storeLoggedInUserData(userDetails) {
  return {
    type: "ADD_LOGGED_IN_USER_TO_STORE",
    userDetails
  };
}

export function validateUser(success) {
  return {
    type: "UPDATE_LOGGED_IN_STATUS",
    loggedIn: success
  };
}

export function addLoggedInUserToStore(success) {
  return {
    type: "ADD_REGISTRATION_SUCCESS",
    registrationSuccessful: success
  };
}

export function getSessions() {
  return function(dispatch, getState) {
    fetch("/api/sessions")
      .then(response => response.json())
      .then(result => dispatch(receiveSessions(result)))
      .catch(error => {
        ({ error: error.message });
      });
  };
}

export function registerUserToDb(values) {
  return function(dispatch, getState) {
    fetch("/api/register", {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        dispatch(confirmRegistration(true));
      })
      .catch(error => {
        ({ error: error.message });
      });
  };
}

export function sendLoginToDb(values) {
  return function(dispatch, getState) {
    fetch("/api/login", {
      method: "post",
      body: JSON.stringify({
        username: values.email,
        password: values.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.status === 200) {
          console.log("200");
          dispatch(validateUser(true));
          dispatch(storeLoggedInUserData(result));
        } else {
          dispatch(validateUser(false));
        }
      })
      .catch(error => {
        ({ error: error.message });
      });
  };
}
