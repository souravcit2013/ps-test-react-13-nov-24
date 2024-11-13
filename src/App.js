import PokemonContainer from "./component/PokemonContainer";
import PokemonContextProvider from "./context/PokemonContextProvider";
import "./styles.css";

// that consumes the https://pokeapi.co/api/v2/pokemon/
// API and displays a dropdown list of pokemons.
// When the user selects a pokemon from the dropdown,
// the application should make a second API call using the "url" returned in the
// first API call to fetch the pokemon's details, including its abilities,
// and display them on the page.
// Once the details are fetched, they
// should be cached and the application should not make another API call for that pokemon again.

export default function App() {
  return (
    <div className="App">
      <PokemonContextProvider>
        <PokemonContainer />
      </PokemonContextProvider>
    </div>
  );
}
