import React from 'react';

const CatList = props => {

return props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="" />)
}
export default CatList;