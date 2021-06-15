// write your CatList component here
// import React, { Component } from "react";
import React from "react";

// export default class CatList extends Component {

//   render() {
//     // console.log("cats: ", this.props.cats)
//     return (
//       <div>
//         {this.props.catPics && this.props.catPics.map(cat => {
//           return (
//             <div key={cat.id}>
//               <img src={cat.url} alt="cat pic"/>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

// const CatList = (props) => {
//   return (
//     <div>
//       {props.catPics &&
//         props.catPics.map((cat) => {
//           return (
//             <div key={cat.id}>
//               <img src={cat.url} alt="cat pic" />
//             </div>
//           );
//         })}
//     </div>
//   );
// };

const CatList = ({ catPics }) => {
  return (
    <div>
      {catPics &&
        catPics.map((cat) => {
          return (
            <div key={cat.id}>
              <img src={cat.url} alt="cat pic" />
            </div>
          );
        })}
    </div>
  );
};

export default CatList;
