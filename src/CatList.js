// write your CatList component here

import React, { Component } from 'react';

const CatList = props => {
  return (
    <div className="cat-pics">
      {props.catPics.map((pic, idx) => {
        return <img key={idx} src={pic.url} height="300px"/>
      })}
    </div>
  );
}

export default CatList;
