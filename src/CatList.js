import React, { Component } from 'react';

class CatList extends Component {

    renderCats = () => this.props.catPics.map( catPics => <img src={catPics.url}/>)

    render(){
      return (
        <div>
        {this.renderCats()}
        </div>
      )
    }
  };

  export default CatList;
