import React from 'react'

const CatList = (props) => {
  return (
    <div>
      {props.catPics.map((pic, index) => 
        <img key={index} src={pic} alt="cats"/>
      )}
    </div>
  )
}
export default CatList