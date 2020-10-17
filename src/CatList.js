// write your CatList component here

import React from 'react';
import App from './App';

const CatList = (props) => {
  return(
    <div>
      <ul>
        {props.catPics && props.catPics.map((catPic) => (
          <li key={catPic.id}>
            <img src={catPic.url} alt="cat-pic" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CatList