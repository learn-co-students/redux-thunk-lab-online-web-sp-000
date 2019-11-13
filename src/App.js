import React, { Component } from 'react';
import { connect} from 'react-redux';
import { fetchCats } from './actions/catActions.js'
import CatList from './CatList.js'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {<CatList loading={this.props.loading} catPics={this.props.catPics || []} />}
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

export default connect(mapStateToProps, {fetchCats})(App)
