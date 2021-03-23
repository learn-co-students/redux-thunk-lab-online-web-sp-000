import React, { Component } from "react";

export default class CatList extends Component {
    renderCatPics() {
        console.log(this.props.catPics)
        return this.props.catPics.map( pic => <img src={pic.url}></img>)
    }

    render() {
        return <div>
            {this.renderCatPics()}
        </div>
    }
}