import React, { Component } from 'react';

class Cat extends Component {

  render() {
    console.log("cat",this.props)
    return (
      <div>
        <img alt="" src={this.props.catPics}/>
        

      </div>
    );
  }

}

export default Cat;
