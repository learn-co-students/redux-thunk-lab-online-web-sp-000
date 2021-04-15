// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {
    renderCats = () => this.props.catPics.map(cat => <li><img src={cat.url} alt="cats"></img></li>)
    render() {
        console.log(this.props.catPics)
        return (
            <ul>{this.renderCats()}</ul>
        )
            
        
    }
}