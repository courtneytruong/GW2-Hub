import React from "react";

export default function SortButton({ sortOrder, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="text-white px-3 py-1 transition-all border p-2 rounded"
    >
      Sort: {sortOrder === "asc" ? "A → Z" : "Z → A"}
    </button>
  );
}
