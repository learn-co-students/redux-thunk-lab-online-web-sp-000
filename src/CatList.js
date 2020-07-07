import React from 'react';

const catList = (props) => {
    return (
        <div>
        {props.catPics.map(catPic => (
                <img key={catPic.id} src={catPic.url} alt="A cat pic" />
        ))}
        </div>
    );
} 

export default catList;