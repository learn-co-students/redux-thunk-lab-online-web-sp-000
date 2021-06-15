import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }

  render() {
    console.log(this.props.catpics);
    console.log("loading state: ", this.props.loading);
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.loading && (
          <div>
            <h3>loading...</h3>
          </div>
        )}
        <CatList catPics={this.props.catpics} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catpics: state.cats,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
    //above is basicallly like a variable pointing to a function expression?
    // why is this call a dispatch and the other two are as well?
  };
};
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);
