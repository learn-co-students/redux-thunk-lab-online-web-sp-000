import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.fetchCats();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.cats.loading,
    catPics: state.cats.pictures
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

