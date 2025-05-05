import { useEffect, useState } from "react";
import { fetchCharacters } from "../utils/api";
import CharacterCard from "../components/CharacterCard";
import ApiKeyInput from "../components/ApiKeyInput";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [apiKey, setApiKey] = useState(localStorage.getItem("gw2_api_key"));

  useEffect(() => {
    if (apiKey) {
      fetchCharacters(apiKey).then(setCharacters);
    }
  }, [apiKey]);
  if (!apiKey) return <ApiKeyInput onSubmit={setApiKey} />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your GW2 Characters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {characters.map((charName) => (
          <CharacterCard key={charName} name={charName} apiKey={apiKey} />
        ))}
      </div>
    </div>
  );
}
