// write your CatList component here
import React from 'react';

class CatList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.catPics.map(cat => <li key={cat.id}><img src={cat.source_url} /></li>)}
            </ul>
        )
    }
};

export default CatList;