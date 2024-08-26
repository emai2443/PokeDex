import { useState, useEffect } from 'react';

const Home = () => {
  const [displayPokemon, setdisplayPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=20`
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const json = await res.json();

    setLoadMore(json.next);

    async function setPokemonObject(result) {
      for (const pokemon of result) {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const json = await res.json();

        setdisplayPokemon((currentList) => [...currentList, json]);
      }
    }
    setPokemonObject(json.results);
    await console.log(displayPokemon);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div>
      <li></li>
    </div>
  );
};

export default Home;
