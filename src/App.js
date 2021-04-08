import React, { Component } from 'react';
import CatList from './CatList';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

// spinner code?
// import Loader from "react-loader-spinner";


class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.loading)
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.loading ? <h2>LOADING...</h2> : null}
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { catPics: state.cats, loading: state.loading }
}

function mapDispatchToProps(dispatch) {
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

