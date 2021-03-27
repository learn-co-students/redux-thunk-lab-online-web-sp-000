// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
   renderCatPics = () => {
      return this.props.catPics.map(cat => {
         return <img key={cat.id} src={cat.url} alt="Picture of a cat" />
      });
   }
  
   render() {
      return (
         <div>{this.renderCatPics()}</div>
      )
   }

}
export default CatList;