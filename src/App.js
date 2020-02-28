//Connects to the store and gets data via mapStateToProps

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
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
    console.log(this.props.catPics) //log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {/* add CatList component here */}
        {this.handleLoading()}
      </div>
    );
  }
}

// const mapStateToProps = state => { //no longer needed b/c passing in fetchCats() which brings in state.
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//   }
// }

const mapDispatchToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)

