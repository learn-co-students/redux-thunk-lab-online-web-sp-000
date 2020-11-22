import React, { Component } from 'react'

class CatList extends Component {
    render() {
      const cats = this.props.catPics.map((cat,idx) => {
        return <img src={cat.url} />
      }); 
      return (
        <div>
          {cats}
        </div>
      );
    }
  };
  
  export default CatList