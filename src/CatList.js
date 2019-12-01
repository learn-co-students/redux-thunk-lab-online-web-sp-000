import React from 'react';

const CatList = (props) => {
  const renderCats = props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id} ></img>);

  return <div>{renderCats}</div>;
}

export default CatList;
