import React from 'react'

const CatList = props => 
  <div>
    <ul>
      {props.catPics.map(pic => (
        <div key={pic.id}>
          <img src={pic.url} alt="Cat Pic" />
        </div>
      ))}
    </ul>
  </div>

export default CatList
