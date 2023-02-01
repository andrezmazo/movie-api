import React, { useState } from "react";

function SearchBar(props) {
//   let inputHandler = (e) => {
//       e.preventDefault();
//       var lowerCase = e.target.value.toLowerCase();
//       props.setInputText(lowerCase);
//     };
  return (
    <React.Fragment>
        <div className="input-container">

      <input
       className="input-group mb-3 input-search"
       type="text"
       placeholder="Search here"
       onChange={props.inputHandler}
       value={props.inputText}
       />
       </div>
    </React.Fragment>
  );
}
export default SearchBar;
