export function receiveSessions(sessions) {
  return {
    type: "RECEIVE_SESSIONS",
    sessions
  };
}

export function addUserToStore(user) {
  return {
    type: "ADD_LOGGED_IN_USER",
    user
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
        dispatch(addUserToStore(result));
      })
      .catch(error => {
        ({ error: error.message });
      });
  };
}
