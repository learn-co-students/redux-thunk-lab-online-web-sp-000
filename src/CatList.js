// write your CatList component here
import React, { Component } from "react";

export default class CatList extends Component {
  render() {
    const cats = this.props.catPics;
    return (
      <div>
        {cats.map(cat => (
          <img key={cat.id} src={cat.url} alt="A cat!" />
        ))}
      </div>
    );
  }
}
