import React, { Component } from 'react';
//1. import connect 
import { connect } from 'react-redux';
// 5. import fetchCats 
import { fetchCats } from './actions/catActions'
import CatList from './CatList'


class App extends Component { 
  
  //3. componentDidMount will be called automatically when the component is mounted for the first time 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  //5. loading 
  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
      }
    }
  
  
  render() {
    //show an empty array in console 
    console.log(this.props.catPics)
    return (
      <div className = "App">
        <h1>CatBook</h1>
        {/* add CatList component here */}
       {this.handleLoading()}
      </div>
    );
  }
}

//2. write mapStateToProps 
const mapStateToProps = state => {
  return {
    //return key value pairs 
    catPics: state.cats,
    loading: state.loading
  }
}

//4. access dispatch function 
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

