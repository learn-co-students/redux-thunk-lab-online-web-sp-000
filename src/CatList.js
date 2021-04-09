// write your CatList component here
import React from "react";

function CatList(props) {
  console.log(props.catPics);
  const displayCats = props.catPics.map(cat => (
    <img src={cat.url} alt={cat.id} key={cat.id} />
  ));

  return <div>{displayCats}</div>;
}

export default CatList;