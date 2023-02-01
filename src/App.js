import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import Result from "./Result"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

function App() {

  const [data, setData] = useState([])
  const [inputText, setInputText] = useState("");

  async function getAllData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1200')
    const data = await response.json()
    setData(data.results)
  }
  let inputHandler = (e) => {
    e.preventDefault();
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <section className="main">
      <h1 className="title">Pokemon Database</h1>
      <p className="description">Lista Pokemones</p>
      <SearchBar inputHandler={inputHandler} inputText={inputText}/>
      <section className='grid'>
        <Result inputText={inputText}  data={data}/>
      </section>
    </section>
  );
}

export default App;