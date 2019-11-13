// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

render() {
  console.log(this.props)
  return (
    <div>
      {this.props.loading ? "Loading; please wait" : null}
      <ul>
        {this.props.catPics.map(x => <li key={x.id}><img src={x.url} alt="" /></li>)}
      </ul>
    </div>
  )
}

}

export default CatList;
