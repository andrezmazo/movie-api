/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Result(props) {
  const filteredData = props.data.filter((el) => {
    // if (!props.inputText){
    //     return el.name.toLowerCase().includes(props.inputText);
    // }
    if (props.inputText === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.inputText);
    }
  });
  console.log("inputtext", props.inputText);
  console.log("Filtered", props.filteredData);
  return (
    <React.Fragment>
      {filteredData.map((character) => (
        <div className="card">
          <img
            src={`https://img.pokemondb.net/artwork/large/${character.name}.jpg`}
            alt={character.name}
            className="card-img-top"
          />
          <div class="card-body">
            <h5 className="card-title">{character.name}</h5>
            <div className="card-text">
              {character.status} - {character.species}
            </div>
            <a className="btn btn-primary"> Ver más</a>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Result;
