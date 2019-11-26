import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }

  loadingImages = () => {
    if (this.props.loading) {
      return <h3>Loading Cat Pics...</h3>
    }
  }

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.loadingImages()}
        <CatList catPics={this.props.catPics} />
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
