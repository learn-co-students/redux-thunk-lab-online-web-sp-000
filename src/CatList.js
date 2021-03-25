import React, { Component } from 'react';

export default class CatList extends Component{

    render(){
      return (
        <div>
          {this.props.catPics.map((img, idx) => {
              return <img src={img.url} alt="a cat pic" />
          })}
        </div>
      )
    }
}
