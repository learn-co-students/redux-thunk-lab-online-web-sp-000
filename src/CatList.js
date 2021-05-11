import React, { Component } from 'react';

class CatList extends Component {

    render() {
        const list = this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id} />)

        return (
            <div className="cat-list">
            {list}
            </div>
        )
    }
}

export default CatList;