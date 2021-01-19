import React, { Component } from 'react'

export default class CatList extends Component {   
    catImg = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    } 
    render() {
        console.log(this.catImg)
        return (
            <div>
                {this.catImg()}
            </div>
        )
    }
}
