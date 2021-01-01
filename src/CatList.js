// write your CatList component here
import React from 'react';

class CatList extends React.Component {
    render() {
        return (
            <div>
                {this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="cat-picture" />)}
            </div>
        )
    }
}

export default CatList