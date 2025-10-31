import React, { useEffect, useState } from "react";

function List() {
  const [pokemons, setPokemons] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results);
      });
  }, []);

  const addToTeam = (pokemon) => {
    if (team.length < 4) {
      setTeam([...team, pokemon]);
    }
  };

  return (
    <div>
      <div className="d-flex mb-3">
        <h1>Team Editor</h1>
        <button className="btn btn-outline-primary ms-auto">Back</button>
      </div>
      <div className="d-flex gap-3">
        <div className="col-6">
          <input type="text" className="form-control mb-3" placeholder="team name" />
          <h3>Team Members</h3>
          <ul className="list-group">
            {(() => {
              if (team.length < 1) {
                return <li>No team members yet.</li>;
              } else {
                return team.map((pokemon, i) => (
                  <li key={i} className="list-group-item">{pokemon.name}</li>
                ));
              }
            })()}
          </ul>
        </div>

        <ul className="list-group col-6">
          {pokemons.map(pokemon => (
            <li
              key={pokemon.name}
              className="list-group-item"
              onClick={() => addToTeam(pokemon)}
              style={{ cursor: 'pointer' }}
            >
              <span>{pokemon.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;