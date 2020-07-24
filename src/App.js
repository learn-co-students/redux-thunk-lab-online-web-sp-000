import React, { Component } from "react";
import { fetchCats } from "./actions/catActions";
import { connect } from "react-redux";
import CatList from "./CatList";
class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { cats: state.cats };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
