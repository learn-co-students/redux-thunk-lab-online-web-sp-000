// write your CatList component here
import React, { Component } from 'react';




export default class CatList extends Component {

  renderCats = () => {
    return this.props.catPics.map( catObj => { return <img src={catObj.url} /> })
  }

  render() {
    return (

      <div>
      {this.renderCats()}
      </div>

    )
  }
};
