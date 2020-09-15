import React, { Component } from 'react';

class CatList extends Component {


  render() {
    console.log('0 - rendering catlist', this.props.catPics)

    return(
      <div>
          {console.log('2 - cats loaded', this.props.catPics)}
          {this.props.catPics.map((element, index) => <img key={index} src={element.url} id={element.id} alt={index}></img>)}
      </div>
    );
  }
};

export default CatList;