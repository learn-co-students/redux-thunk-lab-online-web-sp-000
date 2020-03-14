import React, { Component } from 'react';


class CatList extends Component {
  render() {
    const catList = this.props.catPics.map((cat) => {
      return (
        <li key={cat.id}>
          <img src={cat.url} alt={'cat image id: ' + cat.id} />
        </li>
      )
    })

    return (
      <div>
        <ul>
          {catList}
        </ul>
      </div>
    );
  }
};

export default CatList;
