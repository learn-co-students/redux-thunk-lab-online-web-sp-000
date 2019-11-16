import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatList from './CatList';
import { fetchCats } from './actions/catActions'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }

  listCats = () => {
    if (this.props.loading) {
      return <div>Fetching Cats</div>
    }
    else {
      return <CatList catPics={this.props.catPics} />
    }
  };

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.listCats()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

