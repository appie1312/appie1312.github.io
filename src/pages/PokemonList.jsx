import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Pokémon Lijst</h1>
      <ul className="list-group">
        {pokemons.map(p => (
          <li
            key={p.name}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="text-capitalize">{p.name}</span>
            <Link to={`/list/${p.name}`} className="btn btn-primary btn-sm">
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
