// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
   // renderCatPics = () => {
   //    // debugger
   //    if (this.props.catPics.loading) {
   //       return this.props.catPics.map(cat => {
   //          return (
   //             <div>
   //                <img src={cat.url} alt="Picture of a cat" />
   //             </div>
   //          )
   //       })
   //    }
   // }
  
   render() {
      console.log('CatList props: ', this.props);
      return (
         <div>{/*this.renderCatPics()*/}</div>
      )
   }

}
export default CatList;