import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import catList from './CatList'

class App extends Component {  
  // in a componentDidMount run the dispatch function that is part of the component's props
  componentDidMount () {
    console.log("IM mounting")
    this.props.fetchCats()
  } 
  
  render() {
    console.log("props in the app component", this.props)
    return (
      <div>
        <h1>CatBook</h1>
        <catList catPics={this.props.catPics} />
      </div>
    );
  }
}

// msp takes in state and selects the chunks of that to make available to this component in its props
const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

// mdp takes in dispatch function and adds it as a key on this components props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => {
      dispatch(fetchCats())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

