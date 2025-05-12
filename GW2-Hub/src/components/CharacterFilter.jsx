export default function CharacterFilter({
  searchName,
  setSearchName,
  filterRace,
  setFilterRace,
  filterProfession,
  setFilterProfession,
  filterCrafting,
  setFilterCrafting,
}) {
  return (
    <div className="mb-4 flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={filterRace}
        onChange={(e) => setFilterRace(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Races</option>
        <option value="Human">Human</option>
        <option value="Norn">Norn</option>
        <option value="Sylvari">Sylvari</option>
        <option value="Asura">Asura</option>
        <option value="Charr">Charr</option>
      </select>

      <select
        value={filterProfession}
        onChange={(e) => setFilterProfession(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Professions</option>
        <option value="Warrior">Warrior</option>
        <option value="Guardian">Guardian</option>
        <option value="Revenant">Revenant</option>
        <option value="Engineer">Engineer</option>
        <option value="Ranger">Ranger</option>
        <option value="Thief">Thief</option>
        <option value="Elementalist">Elementalist</option>
        <option value="Necromancer">Necromancer</option>
        <option value="Mesmer">Mesmer</option>
      </select>

      <select
        value={filterCrafting}
        onChange={(e) => setFilterCrafting(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Crafting</option>
        <option value="Artificer">Artificer</option>
        <option value="Armorsmith">Armorsmith</option>
        <option value="Chef">Chef</option>
        <option value="Huntsman">Huntsman</option>
        <option value="Jeweler">Jeweler</option>
        <option value="Leatherworker">Leatherworker</option>
        <option value="Scribe">Scribe</option>
        <option value="Tailor">Tailor</option>
        <option value="Weaponsmith">Weaponsmith</option>
      </select>
    </div>
  );
}
