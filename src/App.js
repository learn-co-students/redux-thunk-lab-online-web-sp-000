import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    const catList = <CatList catPics={this.props.catPics} />;
    const renderOnLoading = (this.props.loading) ? <h3>Loading...</h3> : catList;

    return (
      <div className="App">
        <h1>CatBook</h1>
        {renderOnLoading}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

