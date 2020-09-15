import React, { Component } from 'react';

class CatList extends Component {


  render() {
    console.log('0 - rendering catlist', this.props.catPics)
    if (this.props.loading === false ){
    return(
      <div>
          {console.log('2 - cats loaded', this.props.catPics)}
          {this.props.catPics.map((element, index) => <img key={index} source={element.url} alt={element.id}></img>)}
      </div>
    );
  } else {
    return(
        <div>
            {console.log('1 - wait cats are loading', this.props.catPics)}
        Cats are loading
        </div>
      );
  }
  }
};

export default CatList;