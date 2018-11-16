import React from "react";

function Session({ session }) {
  return (
    <div className="app__session">
      <h2>{session.name}</h2>
      <p>{session.description}</p>
    </div>
  );
}

export default Session;
