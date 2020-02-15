import React from 'react'

export default function CatList(props) {
    return (
        <div>
            {props.catPics.map(catPic=><img src={catPic.url}></img>)}
        </div>
    )
}
