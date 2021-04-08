import React, { Component } from 'react';

export default class CatList extends Component {
    render() {
        const array = this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt="cat" style={{ width: 500 + 'px' }} />);
        return (
            < div >
                { array}
            </div >
        )
    }
}