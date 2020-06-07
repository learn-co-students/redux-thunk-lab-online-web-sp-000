// src/App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
 
class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  hazCats() {
    if (this.props.catPics !== []) {
      return <CatList catPics={this.props.catPics}/>
    }
  }
 
  render() {
    console.log('In App render, this.props.catPics',this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1> 
        {this.hazCats()}
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
export default connect(mapStateToProps, mapDispatchToProps)(App)

