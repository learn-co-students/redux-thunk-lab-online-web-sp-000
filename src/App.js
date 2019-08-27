import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  
  componentDidMount() {console.log('component mounted')
    this.props.fetchCats()
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
        <div>
          <CatList catPics={this.props.pictures} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({pictures: state.cats.pictures})

export default connect(mapStateToProps, {fetchCats} )(App)

