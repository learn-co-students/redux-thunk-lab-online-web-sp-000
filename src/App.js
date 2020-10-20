import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  // While content is being fetched, it would be nice to show the user something
  // - often, spinning icons are used, but even just a simple 'Loading...' is enough to show to the user that content is on the way.
  //  we use the value of this.props.loading to implement a loading message until the cat images arrive
  
  render() {
    console.log(this.props.catPics)
    // Using the above code, you should see an empty array logged in the console when the app is launched.
    // This is the empty cats array in our initial state, now mapped to this.props.catPics in App.
    return (
      <div className='App'>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        {/* <CatList catPics={this.props.catPics} /> */}
        {this.handleLoading()}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// Now that Redux and Thunk are set up, it is time to display the retrieved data in our app. 
//  First, let's set up the App component to read from our Redux store. 
// We'll do this by first importing connect from react-redux, wrapping the function around App on the export line.
// Then, we'll write a mapStateToProps() helper function. 
// This function will be passed into connect
// connect calls this function, passing in the state from the Redux store.
// Any key/value pairs returned by mapStateToProps() will become props in the App component
// We can use this set up to confirm Redux is correctly creating its initial state 
//  and that we're able to access that state in our React components.

// We want our cat pics to be fetched when the App component is first loaded up.
// The componentDidMount() function will always be called automatically when the component is mounting for the first time
// We need to define our componentDidMount() function so that it calls our fetchCats() action creator. 
//  We also need to write out a mapDispatchToProps() function to make fetchCats() available.
//  We can then access the function as this.props.fetchCats() inside the component and call this when the component mounts

//  If we check the console, we'll see that this.props.catPics is set to [] on the first two renders,
// but on the third, we see an array of 20 cat objects! 
//  Why is this.props.catPics set to [] on the first two renders? 
// The first render is the initial render, so an empty catPics array is always expected.
//  The second render, however, occurs when we send our first dispatch, dispatch({type: 'LOADING_CATS'})
//  If we logged this.props.loading instead of catPics, we would see the following:
    // false
    // true
    // false

    // Once you successfully fetch cats, put them in state, grab them from state and pass them to App under the catPics prop
    // you're ready to build the CatList component.

