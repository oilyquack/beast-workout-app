import React from "react";

class Sessions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSessionsOnMount();
  }

  render() {
    return (
      <section>
        <h2> Sessions: </h2>
        {Object.values(this.props.sessions).map(session => {
          return (
            <div key={session.id} className="session">
              <h2>{session.name}</h2>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Sessions;
