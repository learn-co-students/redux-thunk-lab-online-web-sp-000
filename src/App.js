import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import * as actions from './actions/catActions.js'
import {bindActionCreators} from 'redux'

class App extends Component {
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.fetchCats()
    }
  }

  render() {
    console.log(this.props)
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
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, {...actions})(App)
