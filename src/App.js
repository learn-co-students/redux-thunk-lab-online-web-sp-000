import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import {fetchCats} from './actions/catActions'
import { connect } from 'react-redux'

import CatList from './CatList'


class App extends Component {

  componentDidMount(){
    this.props.fetchCats();
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

        <CatList catPics={this.props.pictures}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
