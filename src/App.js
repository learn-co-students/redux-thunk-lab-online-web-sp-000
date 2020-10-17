import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.props.loading ? <p>Loading</p> : <CatList catPics={this.props.catPics} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catPics: state.cats,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

