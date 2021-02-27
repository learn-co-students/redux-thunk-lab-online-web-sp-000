// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
  renderCatList = () => this.props.catPics.map(cat => <li>{cat.url}</li>)
  
  render() {
    console.log("CatList:", this.props.catPics)
    // console.log("renderCatList:", this.renderCatList)
    return(
      <div>
        <ul>
          {this.props.catPics.map(cat => <img src={cat.url} alt="Girl in a jacket"></img>)}
        </ul>
      </div>
    );
  }
};

export default CatList;