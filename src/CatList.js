// write your CatList component here
import React from 'react'

 const CatList = props => {
    const allCats = props.catPics.map(cat => <img key={cat.id} src={cat.url} />);

 return <div>{allCats}</div>
};

export default CatList;
