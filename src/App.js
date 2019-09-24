import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions'
import {connect} from 'react-redux'
import CatList from './CatList'

class App extends Component {

  componentDidMount(){
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.pictures)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div>
          <CatList catPics={this.props.pictures}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {pictures: state.cats.pictures}
}

export default connect(mapStateToProps, {fetchCats})(App)
