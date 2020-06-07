// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

  render() {
    console.log('in CatList render, this.props', this.props)
    return(
      <div>
        { this.props.catPics.map(pic => <img key={pic.url} src={pic.url}></img>) }
      </div>
    );
  }
} 

export default CatList;