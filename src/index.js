import React, { Component } from 'react'

export default class CatList extends Component {

    render() {
        console.log(this.props.cats)
        return (
            <div>
                {this.props.catPics.map((cat, index) => <img key={index} src={cat.url} />)}
            </div>
        )
    }
}