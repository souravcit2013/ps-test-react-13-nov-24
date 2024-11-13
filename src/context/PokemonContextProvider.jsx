import React, { useReducer, useEffect } from "react";
import {
  POKEMON_FAIL,
  POKEMON_REQUEST,
  POKEMON_SUCCESS,
} from "../actions/actionConstant";
import { PokemonContext } from "./PokemonContext";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const pokemonReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case POKEMON_REQUEST:
      return { ...state, loading: true };
    case POKEMON_SUCCESS:
      return { ...state, loading: false, data };
    case POKEMON_FAIL:
      return { ...state, data: {}, error: true };
  }
};

const PokemonContextProvider = ({ children }) => {
  const [pokemonData, dispatch] = useReducer(pokemonReducer, initialState);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then(({ results: data }) => {
        dispatch({ type: POKEMON_SUCCESS, data });
      })
      .catch((err) =>
        dispatch({ type: POKEMON_FAIL, error: "Something went wrong.." })
      );
  }, []);
  // console.log("__pokemonData__", pokemonData);
  return (
    <PokemonContext.Provider value={{ ...pokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
