// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    mappedCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}/> )
    }
    render() {
        return (
            <div>
                {this.mappedCats()}
            </div>
        )
    }
}

export default CatList;