import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchCats()
  }

  handleLoading = () => {
  	if (this.props.loading) {
  		return <div>loading...</div>
  	} else {
  		return <CatList catPics={this.props.catPics}/>
  	}
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
	return {
		fetchCats: () => dispatch(fetchCats()) 
	}
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

