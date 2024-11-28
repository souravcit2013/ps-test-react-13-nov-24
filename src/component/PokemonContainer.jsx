import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonContainer = () => {
    let testVal = ''
  const { data = [], error } = useContext(PokemonContext);
  const [names, setNames] = useState("");

  const isRender = data?.length > 0;

  const handleChange = (e) => {
    fetch(e.target.value)
      .then((res) => res.json())
      .then(({ abilities = [] }) => {
        let names = "";
        const _namesArr = abilities.map(({ ability }) => {
          const { name } = ability || {};
          return name;
        });
        console.log(_namesArr);
        setNames(_namesArr.join(","));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      {(isRender && (
        <select onChange={handleChange}>
          {data.map(({ name, url }) => (
            <option key={name} value={url}>
              {name}
            </option>
          ))}
        </select>
      )) || <span>{error}</span>}
      <br />
      <br />
      {names && <>Names: {names}</>}
    </>
  );
};

export default PokemonContainer;
