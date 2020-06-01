import React, { Component } from 'react';

class CatList extends Component {


    render(props) {
        
        return (
          <div>
            {this.props.catPics.map(cat => 
                <div key={cat.id}>
                    <img src={cat.url} alt={cat.source_url}/>
                </div>
            )}
          </div>
        );
      }

    }
export default CatList