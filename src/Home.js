import { useState, useEffect } from 'react';
import Thumbnail from './components/Thumbnail';

const Home = () => {
  const [displayPokemon, setdisplayPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=20`
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const json = await res.json();

    setLoadMore(json.next);

    function setPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const json = await res.json();

        setdisplayPokemon((currentList) => [...currentList, json]);
      });
    }
    setPokemonObject(json.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  console.log(displayPokemon);

  return (
    <div className="app-container">
      <h1 className="title">PokeDex</h1>
      <div className="pokemon-continer">
        <div className="all-container">
          {displayPokemon.map((pokemon, index) => (
            <ul>
              <li>
                <Thumbnail
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  key={index}
                />
              </li>
            </ul>
          ))}
        </div>
        <button className="loadMore" onClick={() => getAllPokemon()}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
