
import React, { Component } from "react";

const liStyle = {
   display: 'inline',
   width: 150,
   height: 160,

};

export default class CatList extends Component {




  render() {
    return (
      <div style={liStyle}>
     
          { this.props.catPics && this.props.catPics.map((image, index) => (
            <img style={liStyle} key={index} src={image.url} alt="cats everywhere"/>
          ))} 
        
      </div>
    );
  }
}


