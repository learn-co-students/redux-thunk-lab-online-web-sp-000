import React, { Component } from 'react'
import CatList from './CatList'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  isLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.isLoading()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//   }
// }

export default connect(mapStateToProps, { fetchCats })(App)