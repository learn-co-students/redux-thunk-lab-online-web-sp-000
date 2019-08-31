import React from 'react'

const CatList = (props) => {

    return (
      <div>
        {props.catPics.map((pic, idx) => <img key={idx} src={pic.url} />)}
      </div>
    )
}

export default CatList
