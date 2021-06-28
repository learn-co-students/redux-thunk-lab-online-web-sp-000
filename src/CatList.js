import React, { Component } from 'react';

export default class CatList extends Component {

    renderCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}></img>)
    }

    render() {
        return <div> {this.renderCats()} </div>
    }
}