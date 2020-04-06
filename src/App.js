import React, { Component } from 'react';

// import additional libraries
import { connect } from 'react-redux'

// import cats actions component
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

    /* code change */
    componentDidMount() {
        this.props.fetchCats()
    }

    handleLoading = () => {

        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <CatList catPics={this.props.catPics} />
        }
    }

    render() {
        return (
        <div>
            <h1>CatBook</h1>
            {/* add CatList component here */}
            { this.handleLoading() }
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

// export default App

export default connect(mapStateToProps, { fetchCats })(App)
