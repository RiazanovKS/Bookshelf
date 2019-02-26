import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { Provider } from "react-redux";

import history from "../../utils/history";
import store from "../../store";

import BooksContainer from "../books";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={BooksContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
