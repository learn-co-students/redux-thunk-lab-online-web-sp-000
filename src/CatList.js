import React from 'react';

const CatList = props => {
return props.catPics.map(catPic => console.log(catPic))
}
export default CatList;