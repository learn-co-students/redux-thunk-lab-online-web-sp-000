// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchCats } from './actions/catActions'
// import CatList from './CatList.js';
//
// class App extends Component {
//
//   componentDidMount = () => {
//     console.log(this.props)
//     this.props.fetchCats()
//   }
//
//   determineWhatToRender = () => {
//     if (this.props.loading) {
//       return <div>Loading...</div>
//     }
//     else {
//       return <CatList catPics={this.props.catPics} />
//     }
//   }
//
//
//   render() {
//     console.log(this.props.catPics) // log will fire every time App renders
//     //console.log(this.props.loading)
//
//     return (
//       <div className="App">
//         <h1>CatBook</h1>
//
//         {this.determineWhatToRender()}
//
//       </div>
//     );
//   }
// }
// //{this.determineWhatToRender()}
// const mapStateToProps = state => {
//   return {
//     catPics: state.cats,
//     loading: state.loading
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => dispatch(fetchCats()),
//     loading: state.loading
//   }
// }
// export default connect(mapStateToProps, { fetchCats })(App)









import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
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

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)
