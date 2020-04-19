// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {
      return(
        <ul>
          {
              this.props.catPics.map( cat => {
                return <img key={cat.id} src={cat.url} alt={cat.id} width="100" height="100" />
                }
            )
          }
        </ul>
      );
    }
  };
  
  export default CatList;