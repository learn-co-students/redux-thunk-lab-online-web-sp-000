// write your CatList component here
import React from 'react';

const CatList = props => {
    const cats = props.catPics.map(catPic => <img src={catPic.url} />)

    return (
        <div>
            {cats}
        </div>
    )
}

export default CatList;