export function receiveSessions(sessions) {
  return {
    type: "RECEIVE_SESSIONS",
    sessions
  };
}

export function getSessions() {
  return function(dispatch, getState) {
    fetch("/api/sessions")
      .then(response => response.json())
      .then(result => dispatch(receiveSessions(result)))
      .catch(error => {
        console.log({ error: error.message });
      });
  };
}
