import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  componentDidMount(){
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.loading, this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.loading ? "loading" : <CatList catPics = {this.props.catPics} />}
      </div>
    );
  }
}

export default connect((state)=>({catPics: state.cats, loading: state.loading}),  {fetchCats})(App)

