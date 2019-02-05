import React, { Component } from "react";
import { Navbar } from "react-bootstrap";


import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import CatList from "./CatList";

import { fetchCats } from "./actions/catActions";

export class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }
  render() {
    return (
      <div className="App">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">CatBook</a>
            <CatList catPics={this.props.catPics} />
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchCats: bindActionCreators(fetchCats, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
