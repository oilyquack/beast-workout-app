import React from "react";
import SessionsContainer from "../containers/SessionsContainer";
import NavContainer from "../containers/NavContainer";

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <NavContainer />
          <Route exact path="/" render={() => <h1>BEAST!</h1>} />
          <Route path="/sessions" component={SessionsContainer} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
