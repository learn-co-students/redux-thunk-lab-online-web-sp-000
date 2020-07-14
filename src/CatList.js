// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

    renderCats = () => this.props.catPics.map((catPic, id) => {
        return (
            <li key={id}>
                <img src={catPic.url} />
            </li>
        )
    })


    render () {
        return (
            <ul>
                {this.renderCats()}
            </ul>
        )
    }
}

export default CatList; 
