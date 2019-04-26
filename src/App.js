import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
// import * as actions from './actions/catActions.js'
import { fetchCats } from './actions/catActions.js'
// import { bindActionCreators } from 'redux'
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
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({catPics: state.cats.pictures})

// const mapDispatchToProps = (dispatch) => {
//   return { 
//     // actions: bindActionCreators(actions, dispatch)
//   }
// }  

export default connect(mapStateToProps, { fetchCats })(App)

