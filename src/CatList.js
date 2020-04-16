// write your CatList component here
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class CatList extends Component {

    renderCats = () => {
        return this.props.catPics.map(cat => <li><img src={cat.url}/></li>)
    }

    render() {
        return (
            <Fragment>
            {this.renderCats()}
            </Fragment>
        )
    }
}

export default CatList
