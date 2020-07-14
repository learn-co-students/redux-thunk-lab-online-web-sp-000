import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCats } from './actions/catActions';

class App extends Component {   

componentDidMount(){ 
  if (this.props.catPics.length === 0)
  this.props.actions.fetchCats();
}

  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
       <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

