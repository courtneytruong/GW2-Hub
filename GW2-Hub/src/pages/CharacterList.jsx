import { useEffect, useState } from "react";
import { fetchCharacters, fetchCharacterDetails } from "../utils/api";
import CharacterCard from "../components/CharacterCard";
import ApiKeyInput from "../components/ApiKeyInput";
import CharacterFilter from "../components/CharacterFilter";

export default function CharacterList() {
  //character data storage, stores data to an array
  const [characters, setCharacters] = useState([]);
  //favorites filter state, pulls saved favorites from local storage
  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  //set api key, pull api key from local storage
  const [apiKey, setApiKey] = useState(localStorage.getItem("gw2_api_key"));

  //search, filter states
  const [searchName, setSearchName] = useState("");
  const [filterProfession, setFilterProfession] = useState("");
  const [filterRace, setFilterRace] = useState("");
  const [filterCrafting, setFilterCrafting] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  //loading state
  const [loading, setLoading] = useState(false);

  //store favorited characters to local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  //fetch full character data if apikey is present. if no api key shows component to allow api key submission and sets api key on submit
  useEffect(() => {
    async function loadAllCharacterDetails() {
      try {
        const names = await fetchCharacters(apiKey);
        const detailedChars = (
          await Promise.all(
            names.map((name) =>
              fetchCharacterDetails(apiKey, name).catch(() => null)
            )
          )
        ).filter((char) => char?.name);
        setCharacters(detailedChars);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      } finally {
        setLoading(false);
      }
    }

    loadAllCharacterDetails();
  }, [apiKey]);
  if (!apiKey) return <ApiKeyInput onSubmit={setApiKey} />;

  //loading div shows if characters are loading
  if (loading) {
    return <div>Loading characters…</div>;
  }

  //toggle favorite button
  const toggleFavorite = (name) =>
    setFavorite((prevFavorites) =>
      prevFavorites.includes(name)
        ? prevFavorites.filter((id) => id !== name)
        : [...prevFavorites, name]
    );

  //search by name and filter by profession, race, crafting profession logic
  const filteredCharacters = characters
    .filter((char) => {
      console.log(char);
      const nameMatch =
        !searchName?.trim() ||
        char.name.toLowerCase().includes(searchName.trim().toLowerCase());

      const raceMatch =
        !filterRace?.trim() ||
        char.race.toLowerCase?.() === filterRace.trim().toLowerCase();

      const professionMatch =
        !filterProfession ||
        char.profession?.toLowerCase() === filterProfession.toLowerCase();

      const craftingMatch =
        !filterCrafting ||
        (Array.isArray(char.crafting) &&
          char.crafting.some(
            (c) => c.discipline?.toLowerCase() === filterCrafting.toLowerCase()
          ));

      return nameMatch && raceMatch && professionMatch && craftingMatch;
    })
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

  //filters out characters toggled as favorite
  const favoriteCharacters = filteredCharacters.filter((char) =>
    favorite.includes(char.name)
  );

  //filters out characters not toggled as favorite
  const nonFavoriteCharacters = filteredCharacters.filter(
    (char) => !favorite.includes(char.name)
  );

  return (
    <div className="p-4 mx-auto max-w-5xl min-h-screen">
      <h1 className="text-2xl text-center font-bold mb-4">Characters</h1>
      <CharacterFilter
        searchName={searchName}
        setSearchName={setSearchName}
        filterRace={filterRace}
        setFilterRace={setFilterRace}
        filterProfession={filterProfession}
        setFilterProfession={setFilterProfession}
        filterCrafting={filterCrafting}
        setFilterCrafting={setFilterCrafting}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {/* favorite list */}
      <div>
        <h2 className="text-neutral-300 text-lg font-semibold border-b-2 border-neutral-300 mb-4">
          Favorite Characters
        </h2>
        <div className="flex flex-wrap gap-6">
          {favoriteCharacters.map((char) => (
            <div className="w-full sm:w-[calc(50%-12px)]">
              <CharacterCard
                key={char.name}
                char={char}
                apiKey={apiKey}
                favorite={favorite}
                toggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>
      </div>
      {/* all other characters list */}
      <div>
        <h2 className="text-neutral-300 text-lg font-semibold border-b-2 border-neutral-300 mb-4 mt-4">
          All Other Characters
        </h2>
        <div className="flex flex-wrap gap-6">
          {nonFavoriteCharacters.map((char) => (
            <div className="w-full sm:w-[calc(50%-12px)]">
              <CharacterCard
                key={char.name}
                char={char}
                apiKey={apiKey}
                favorite={favorite}
                toggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
