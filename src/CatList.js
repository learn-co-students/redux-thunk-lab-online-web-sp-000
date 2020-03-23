// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

  // catPics = () => this.props.catPics.map((catPic) => <div><img alt={catPic.id} src={catPic.url}/></div>)
  catPics() {
      if (this.props.loading) {
        return <div><h1>Loading...</h1></div>
      } else {
        return this.props.catPics.map((catPic) => <div><img alt={catPic.id} src={catPic.url}/></div>)
      }
  }

  render() {
    return(
      <div>
      {
        this.catPics()
      }
      </div>
    )
  }
}

export default CatList;
