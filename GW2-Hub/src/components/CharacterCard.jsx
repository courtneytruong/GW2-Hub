import { useEffect, useState } from "react";
import { fetchCharacterDetails } from "../utils/api";

export default function CharacterCard({ name, apiKey }) {
  const [char, setChar] = useState(null);

  useEffect(() => {
    fetchCharacterDetails(apiKey, name).then(setChar);
  }, [name, apiKey]);
  if (!char) return <div>Loading {name}...</div>;

  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-semibold">{char.name}</h2>
      <p>Race: {char.race}</p>
      <p>Profession: {char.profession}</p>
      <p>Level: {char.level}</p>
      <p>Gender: {char.gender}</p>
    </div>
  );
}
