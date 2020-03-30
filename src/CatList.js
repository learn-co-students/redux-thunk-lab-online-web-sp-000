// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    showImgs = () => {
        console.log(this.props.catPics)
        return this.props.catPics.map(pic => {
            return <li id={pic.id}><img src={pic.url} alt={pic.source_url}/></li>
        })
    }

    render() {
        return (
            <ul>
                {this.showImgs()}
            </ul>
        )
    }
}

export default CatList