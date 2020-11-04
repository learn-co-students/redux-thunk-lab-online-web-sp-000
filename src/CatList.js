// write your CatList component here
import React from "react";

function CatList({ catPics }) {
  return (
    <div>
      {catPics.map((catPic) => (
        <img src={catPic.url} key={catPic.id} alt="Cat pic" />
      ))}
    </div>
  );
}

export default CatList;
