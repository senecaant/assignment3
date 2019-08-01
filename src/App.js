import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

// Import Components
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

// Import Pages
import Pokedex from './pages/Pokedex/Pokedex';
import PokePage from './pages/PokePage/PokePage';

function App() {

  //States
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  function getPokemonList() {

    //Get list of pokemon from API
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        setPokemonList(response.data.results);
        setLoading(false);
      })
  }


  // useEffect runs after the component renders
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      clearTimeout(loadingTimer);
      getPokemonList();
    }, 1000);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        {loading ? (<Loading />) : (
          <Switch>
            <Route exact path="/" render={() => {
              return (<Pokedex listData={pokemonList} />);
            }} />

            <Route path="/:pokemonName" render={(props) => {
              return (<PokePage {...props} />);
            }} />
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;



/*
  function getPokemonData() {

    //Get list of pokemon from API
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        const pokemonList = response.data.results;
        const pokemonData = [];

        //Get the data for each pokemon in the list
        axios.all
          (
              pokemonList.map((listItem) => {
                return axios.get(listItem.url)
                  .then((response) => { pokemonData.push(response.data); })
              })
          )
        .then(() => {
          setPokemonData(pokemonData);
          setLoading(false);
        })
      })
  }
*/