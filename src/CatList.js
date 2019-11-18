import React from 'react';

const CatList = ({ catPics }) => {
  console.log(catPics)
  const cats = catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
  return (
    <div>
      {cats}
    </div>
  );
}

export default CatList;
