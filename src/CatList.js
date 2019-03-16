import React from 'react';

const CatList = (props) => {
  console.log(props.catPics + ' whoa')
  const displayCats = props.catPics.map((cat, index) =>
    <img src={cat.url} key={index} />
  );

  return (
    <div>
      {displayCats}
    </div>
  )
}

export default CatList;
