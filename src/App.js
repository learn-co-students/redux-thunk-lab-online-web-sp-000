import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
     // call fetchCats() action to get all cat pics
     this.props.fetchCats();
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        
        { !this.props.catPics.loading ?  
            <CatList catPics={this.props.catPics} /> : null 
        }
      </div>
    );
  }
}

// connect calls mapStateToprops passing in state from redux store
const mapStateToProps = state => {
   return {
      catPics: state.cats, // becomes props in the app component
      loading: state.loading
   }
}

// makes fetchCats() available
const mapDispatchToProps = (dispatch) => {
   return {
      fetchCats: () => dispatch(fetchCats())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
