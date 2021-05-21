import React from 'react'

const Cats = props => {
  const cat = props.catPics.map(x => <div key={x.id}><img src={x.url}/></div>)
  return (
  <div>
    {cat}
  </div>
)

}

export default Cats
