import React from 'react'

const CatList = props => {
  function listofCats(){
    return props.catPics.map((catPic, idx) => {
      return <img src={catPic.url} key={idx} />
    })
  }

  return (
    <div>
      {listofCats()}
    </div>
  )
}

export default CatList
