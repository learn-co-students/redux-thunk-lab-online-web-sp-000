// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    renderCatImages = () => {
        return (
            this.props.catPics.map(catPic => <img src={catPic.url}></img>)
        )
    }

    render() {
        return (
            <div>
                {this.renderCatImages()}
            </div>
        )
    }
}

export default CatList