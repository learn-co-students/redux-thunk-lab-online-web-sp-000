// write your CatList component here

import React from 'react';

const CatList = (props) => {

    return (
        <div>
            {props.catPics.map( cat => (
                <div><img src={cat.url} /></div>
            ))}
        </div>
    )
}

export default CatList;