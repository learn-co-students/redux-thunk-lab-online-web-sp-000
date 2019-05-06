import React from 'react';



const CatList = (props) => {

  const cats = props.catPics.map(img => <img key={img.id} alt="" src={img.url} />)
  return (

    <div>
      <ul>
        {cats}
      </ul>
    </div>
  )
}

export default CatList
