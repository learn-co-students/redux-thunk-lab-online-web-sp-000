// write your CatList component here
// child presentational component
// receive a list of cat pics from App
// render images in several <img> tags

import React from 'react'

export default function CatList(props) {
    return (
        <div>
            {props.catPics.map((catPic, id)=><img alt="" src={catPic.url} key={id}></img>)}
        </div>
    )
}