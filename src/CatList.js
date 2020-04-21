import React from 'react';

const CatList = props => {


return (
    <div>
        {props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="hello" width={100} height={100}/>)}
    </div>
)}
export default CatList;