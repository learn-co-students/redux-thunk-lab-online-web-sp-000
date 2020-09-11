import React, { Component } from 'react';


class CatList extends Component {  
  renderCatPics = () => {
      return this.props.catPics.map(cp => {return <img src={cp.url} alt="cat"/>})
  }

  render() {
    return (
      <div>
        {this.renderCatPics()}
      </div>
    );
  }
}
 
export default CatList;
