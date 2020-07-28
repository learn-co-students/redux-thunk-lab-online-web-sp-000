import React, { Component } from 'react';

class CatList extends Component {
  
  renderCats() {
    let catList = this.props.catPics;
    let catImages = catList.map(cat => {
      return <img src={cat.url} />
    })
    console.log(catImages)
    return catImages
  }
  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }
}

export default CatList;