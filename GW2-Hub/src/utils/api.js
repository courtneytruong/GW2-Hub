import axios from "axios";

export async function fetchCharacters(apiKey) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/characters?access_token=${apiKey}`
  );
  return res.data;
}

export async function fetchCharacterDetails(apiKey, name) {
  const res = await axios.get(
    `https://api.guildwars2.com/v2/characters/${encodeURIComponent(
      name
    )}?access_token=${apiKey}`
  );
  return res.data;
}
