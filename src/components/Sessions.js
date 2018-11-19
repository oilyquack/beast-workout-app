import React from "react";
import Session from "./Session";

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
        {this.props.sessions &&
          Object.values(this.props.sessions).map(session => {
            return <Session key={session.id} session={session} />;
          })}
      </section>
    );
  }
}

export default Sessions;
