// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {
  
        const renderCats = this.props.catPics.map( c => {
            return <img key={c.id} src={c.url} alt={c.id} width="120" height="120" />
            }
        )

      return(

        <ul>
          {renderCats}
        </ul>
      );
    }
  };
  
  export default CatList;
