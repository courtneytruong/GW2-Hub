import { useEffect, useState } from "react";
import { fetchCharacters } from "../utils/api";
import CharacterCard from "../components/CharacterCard";
import ApiKeyInput from "../components/ApiKeyInput";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [apiKey, setApiKey] = useState(localStorage.getItem("gw2_api_key"));

  //store favorited characters to local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  //toggle favorite button
  const toggleFavorite = (name) =>
    setFavorite((prevFavorites) =>
      prevFavorites.includes(name)
        ? prevFavorites.filter((id) => id !== name)
        : [...prevFavorites, name]
    );

  //filters out characters toggled as favorite
  const favoriteCharacters = characters.filter((char) =>
    favorite.includes(char)
  );

  //filters out characters not toggled as favorite
  const nonFavoriteCharacters = characters.filter(
    (char) => !favorite.includes(char)
  );

  //fetch character data if apikey is present. if no api key shows component to allow api key submission and sets api key on submit
  useEffect(() => {
    if (apiKey) {
      fetchCharacters(apiKey).then(setCharacters);
    }
  }, [apiKey]);
  if (!apiKey) return <ApiKeyInput onSubmit={setApiKey} />;

  return (
    <div className="p-4 mx-auto max-w-5xl min-h-screen">
      <h1 className="text-2xl text-center font-bold mb-4">Characters</h1>
      {/* favorite list */}
      <div>
        <h2 className="text-lg font-semibold">Favorite Characters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favoriteCharacters.map((charName) => (
            <CharacterCard
              key={charName}
              name={charName}
              apiKey={apiKey}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
      {/* all other characters list */}
      <div>
        <h2 className="text-lg font-semibold">All Characters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nonFavoriteCharacters.map((charName) => (
            <CharacterCard
              key={charName}
              name={charName}
              apiKey={apiKey}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
