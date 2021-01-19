import React, { Component } from 'react'

export default class CatList extends Component {   
    catImg = this.props.catPics.map(catPic => { return <img key={catPic.id} src={catPic.url} alt=""></img> }) 
    render() {
        console.log(this.catImg)
        return (
            <div>
                {this.catImg}
            </div>
        )
    }
}
