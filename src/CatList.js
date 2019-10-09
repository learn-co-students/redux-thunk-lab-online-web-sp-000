// write your CatList component here
import React from 'react';
function CatList(props) {
    const renderCats = () => props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="Picture of a Cat"/>)

    return <React.Fragment>{renderCats()};</React.Fragment>
  }
  export default CatList;