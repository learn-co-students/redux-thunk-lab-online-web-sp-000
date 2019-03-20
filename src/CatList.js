import React, { Component } from "react";

export default function CatList(props) {
  const renderCats = () => props.catPics.map((pic, i) => <p key={i}>
    <img src={pic.url}/>
  </p>);

  return <div>{renderCats()}</div>;
}
