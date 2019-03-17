import React, { Component } from 'react';

export default class CatList extends Component {

  render() {
    let cats;
    if (this.props.catPics) {
      cats = this.props.catPics.map(catPic => <img src={catPic.url}/>);
    }
    else {
      cats = "";
    }
    return (
      <div>
        {cats}
      </div>
    )
  }
}