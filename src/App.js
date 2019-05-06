import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="www.google.com">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return { fetchCats: () => dispatch(fetchCats()) }
}

function mapStateToProps(state) {
  return {
    loading: false,
    catPics: state.cats.pictures
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
