import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from "./CatList.js"
import { fetchCats } from "./actions/catActions.js"

class App extends Component {   

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
 
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
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
 
export default connect(mapStateToProps, { fetchCats })(App)
