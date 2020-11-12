// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

  catImages = () => {
    return this.props.catPics.map( cat => <img key={cat.id} src={cat.url} alt="catPic"/>)}

  render() {
    return (
      <div>
        {this.catImages()}
      </div>
    )
  }
}

export default CatList
