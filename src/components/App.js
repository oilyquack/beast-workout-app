import React from "react";
import SessionsContainer from "../containers/SessionsContainer";
import { BrowserRouter, Link, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Link to={`/sessions`}>Session</Link>
          <Route exact path="/" render={() => <h1>BEAST!</h1>} />
          <Route path="/sessions" component={SessionsContainer} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
