import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }


  handleOnLoading = () => {
    console.log(this.props.loading)
    return this.props.loading ? <div>Please wait while loading...</div> : <CatList catPics={this.props.catPics} />

  }
 
  render() {
    console.log('@@catPics',this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleOnLoading()}
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

