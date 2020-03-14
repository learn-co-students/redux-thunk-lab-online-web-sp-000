import React, { Component } from 'react';

class Cat extends Component {



  render() {



    return (
      <div>
        <li>
          <img src={this.props.cat.url} alt={'cat image id: ' + this.props.id} />
        </li>

      </div>
    );
  }

};

export default Cat;
