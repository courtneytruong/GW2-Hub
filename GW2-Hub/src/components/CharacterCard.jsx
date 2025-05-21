import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { calculateAgeFromDate, formatAge } from "../utils/calculateAgeFromDate";
import Navbar from "./Navbar";

export default function CharacterCard({ char, favorite, toggleFavorite }) {
  const [isExpanded, setIsExpanded] = useState(false);

  //toggle expand to show more character details
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  //sets as favorite
  const isFavorite = favorite.includes(char.name);

  //convert age from creation date
  const ageObj = calculateAgeFromDate(char.created);
  const readableAge = formatAge(ageObj);

  return (
    <div className="bg-gradient-to-t from-black to-red-800 p-4 rounded shadow text-neutral-300">
      <h2 className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Card name header with favorites toggle and expand toggle */}
          {isExpanded ? (
            //Expanded name header
            <div className="flex justify-between items-center gap-4">
              <button onClick={() => toggleFavorite(char.name)}>
                {isFavorite ? (
                  <MdFavorite size={40} />
                ) : (
                  <MdFavoriteBorder size={40} />
                )}
              </button>
              <div className="text-2xl font-semibold">{char.name}</div>
            </div>
          ) : (
            // Not expanded name header
            <div className="flex justify-between items-center gap-4">
              <div>
                <button onClick={() => toggleFavorite(char.name)}>
                  {isFavorite ? (
                    <MdFavorite size={40} />
                  ) : (
                    <MdFavoriteBorder size={40} />
                  )}
                </button>
              </div>
              <div>
                <div className="text-2xl font-semibold">{char.name}</div>
                <div className="text-base flex items-center gap-4">
                  {char.race} {char.profession}
                </div>
              </div>
            </div>
          )}
          {/* expand/expand less arrow */}
        </div>
        <div onClick={toggleExpand}>
          {isExpanded ? <MdExpandLess size={40} /> : <MdExpandMore size={40} />}
        </div>
      </h2>

      {/* details shown on expand */}
      {isExpanded && (
        <div className="mt-4 text-black-base animate-fade-in font-semibold">
          <p>Race: {char.race}</p>
          <p>Profession: {char.profession}</p>
          <p>Level: {char.level}</p>
          <p>Gender: {char.gender}</p>
          <p>Age: {readableAge || "Unknown"}</p>
          <p>Deaths: {char.deaths}</p>
          {char.crafting?.length > 0 ? (
            <div>
              <p className="font-semibold mt-2">Crafting:</p>
              <ul className="list-disc list-inside">
                {char.crafting.map((craft, idx) => (
                  <li key={idx}>
                    {craft.discipline} (Level {craft.rating})
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Crafting: None</p>
          )}
        </div>
      )}
    </div>
  );
}
