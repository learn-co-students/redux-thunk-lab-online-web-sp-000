import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount(){
    console.log("did mount:", this.props)
    this.props.fetchCats()
  }
  
  render() {
    console.log("in render=", this.props)
    return (
      <div>
        <h1>CatBook</h1>
      {/* add CatList component here */}
          <CatList catPics={this.props.catPics} /> 

      </div>
    );
  }
}

const msp = state => {
  return{
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(msp, {fetchCats})(App)

