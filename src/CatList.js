import React, { Component } from 'react';

export default class CatList extends Component {

  render() {
    return(
      <div>
        {this.props.catPics.map(catPic => <img src={catPic.url}/>)}
      </div>
    )
  }

}

CatList.defaultProps = { catPics: [] };