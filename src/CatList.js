// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
  render() {
    const catImages = this.props.catPics.map(pic => {
      return (
        <img key={pic.id} src={pic.url} alt="cat" height="400" />
      )
    })

    return (
      <div>
        {catImages}
      </div>
    )
  }

}

export default CatList;