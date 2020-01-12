import React, { Component } from 'react';
import CatList from './CatList'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
 
class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
 
  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }


  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}
 
const msp = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
 
const mdp = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(msp, mdp)(App)