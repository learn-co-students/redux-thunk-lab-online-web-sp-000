import React from 'react';



const CatList = (props) => {
  const catPics = props.catPics.pictures.map(img => <img key={img.id} alt="" src={img.url} />)
  return (
    <div>
      <ul>
      {catPics}

      </ul>
    </div>
  )
}

export default CatList
