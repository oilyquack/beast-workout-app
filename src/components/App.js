import React from "react";
import NavContainer from "../containers/NavContainer";
import SessionsContainer from "../containers/SessionsContainer";
import WorkoutsContainer from "../containers/WorkoutsContainer";
import UserContainer from "../containers/UserContainer";

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <NavContainer />
          <Route exact path="/" render={() => <h1>BEAST!</h1>} />
          <Route path="/sessions" component={SessionsContainer} />
          <Route path="/workouts" component={WorkoutsContainer} />
          <Route path="/user" component={UserContainer} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
