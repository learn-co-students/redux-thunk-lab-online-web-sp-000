// write your CatList component here

import React from 'react'

const CatList = props => (
  <div>
    {props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)}
  </div>
)

export default CatList