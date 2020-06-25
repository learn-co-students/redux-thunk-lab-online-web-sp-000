// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render(){
       console.log(this.props)
        return (
        <div>
            {this.props.catPics.map(cat => <img key={cat.id} alt={cat.id} src={cat.url}/>)}
        </div>
        )
    }
}

export default CatList
