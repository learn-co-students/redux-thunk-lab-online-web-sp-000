import React, { Component } from 'react';
import CatList from './CatList'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchCats()
  }
}

const mapStateToProps = (state) => {
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

