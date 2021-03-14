import React, { Component } from 'react';

class CatList extends Component {

    render() {
        console.log(this.props.catPics)
        return (
            <div>
                {this.props.catPics.map(cat => 
                 <img src={cat.url} alt="cat"/>
                )}
            </div>
        )
    }


}

export default CatList