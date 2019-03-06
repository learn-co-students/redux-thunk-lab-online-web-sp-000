import React from 'react'
 const CatList = props => {
   console.log(props.catPics.pictures)
  const catPics = props.catPics.map(catPic => <li><img src={catPic.url} alt="cat-pic" key={catPic.id}></img></li>)
  return (
    <div>
        <ul>
      {catPics}
        </ul>
    </div>
  )
}
 export default CatList
