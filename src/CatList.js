import React, { Component } from 'react';

class CatList extends Component {
    render(){
    let cats = this.props.catPics.map((cat, id) => <img key={id} src={cat.url}/>)
        return(
            <div>
                {cats}
            </div>
        )
    }

}

export default CatList