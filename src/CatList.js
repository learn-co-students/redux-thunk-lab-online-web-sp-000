// write your CatList component here
import React from "react";

const CatList = ({ catPics }) => {
  return (
    <div>
      {catPics.map((pic, index) => (
        <img src={pic.url} key={index} />
      ))}
    </div>
  );
};

export default CatList;
