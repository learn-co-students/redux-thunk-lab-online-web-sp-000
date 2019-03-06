import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList.js'

class App extends Component {

componentDidMount() {
  console.log("componentDidMount fired")
    this.props.fetchCats()
}


  render() {
    console.log("app render", this.props.catPics)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("mapstate", state)
  return {
    catPics: state.catPics.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: (h)=> dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
