import React from "react";

class CatList extends React.Component {
  render() {
    const catImg = this.props.catPics.map(catPic => (
      <img key={catPic.id} src={catPic.url} />
    ));
    return <div>{catImg}</div>;
  }
}

export default CatList;
