import React, { Component } from 'react';
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';

class App extends Component { 
  
  
  componentDidMount() {
    this.props.fetchCats()
  }

  loading = () => {
    if(this.props.loading){
      return <div>loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.loading()}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)

