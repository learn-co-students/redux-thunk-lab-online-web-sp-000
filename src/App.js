import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics);
    console.log(this.props.loading);
    return (
      <div className="App">
        <h1>CatBook</h1>
        <img>{this.props.catList}</img>
        <CatList catPics={this.props.catPics }/>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)

