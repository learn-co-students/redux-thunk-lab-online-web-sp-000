import React from "react";

class CatList extends React.Component {
  render() {
    console.log("CatList me ", this.props.catPics);
    return (
      <div>
        {this.props.catPics.map(catPic => {
          <image key={catPic.id} src={catPic.url} />;
        })}
      </div>
    );
  }
}

export default CatList;
