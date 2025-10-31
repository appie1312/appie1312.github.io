import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    }
    fetchData();
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} width="150" height="150" />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  );
}

export default PokemonDetail;
