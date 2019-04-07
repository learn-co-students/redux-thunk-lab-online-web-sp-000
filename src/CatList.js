import React from 'react'

const CatList = (props) => {

    function cats() {
      return props.catPics.map(catPic => {
        return (
          <div>
            <img src={catPic.url}/>
          </div>
        )
      })
    }

    return (
      <ul>
        {cats()}
      </ul>
    )
  
}

export default CatList

