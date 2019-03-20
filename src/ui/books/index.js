import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "ducks/books/actions";

import Books from "./Books";

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks("harry potter");
  }

  render() {
    return <Books />;
  }
}

export default connect(
  null,
  actions
)(BooksContainer);
