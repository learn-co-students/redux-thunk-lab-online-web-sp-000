// write your CatList component here
import React from 'react';

const CatList = props => {
  return (
    <div>
      {props.catPics.map((catPic) => <div><img key={catPic.id} alt='cat img' src={catPic.source_url} /></div>)}
    </div>
  );
};

export default CatList;