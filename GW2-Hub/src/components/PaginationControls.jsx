import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <div className="flex justify-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-2 bg-black text-neutral-300 rounded disabled:opacity-50"
        >
          <GrFormPrevious size={25} /> Prev
        </button>
      </div>
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === idx + 1
              ? "bg-red-900 text-neutral-300"
              : "bg-black text-neutral-300"
          }`}
        >
          {idx + 1}
        </button>
      ))}
      <div className="flex justify-center">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 bg-black text-neutral-300 rounded disabled:opacity-50"
        >
          Next <GrFormNext size={25} />
        </button>
      </div>
    </div>
  );
}
