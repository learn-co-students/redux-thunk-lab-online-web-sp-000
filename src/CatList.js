import React, { Component } from 'react';

class CatList extends Component {
  render() {

    const cats = this.props.catPics
    
    const catList = cats.map(cat  => <img key={cat.id} src={cat.url} alt={cat.id} />)


    return(
      <ul> 
        {catList}
      </ul>
    );
  }
};

export default CatList;