import React, { Component } from 'react';

class CatList extends Component {
  render() {
    const catImgs = this.props.catPics.map( c => <img src={c.url} key={c.id}/>);

    return (
      <div>
        {(this.props.loading === true) ? 'Loading...' : catImgs}
      </div>
    );
  }
}

export default CatList;
