function sessionsReducer(state = {}, action) {
  switch (action.type) {
    case "RECEIVE_SESSIONS":
      const receivedSessionsState = action.sessions.reduce((acc, session) => {
        acc = Object.assign({}, acc, {
          [session.id]: {
            id: session.id,
            name: session.name,
            startdate: session.startdate,
            starttime: session.starttime,
            endtime: session.endtime,
            description: session.description,
            capacity: session.capacity
          }
        });
        return acc;
      }, {});
      return receivedSessionsState;
    default:
      return state;
  }
}

export default sessionsReducer;
