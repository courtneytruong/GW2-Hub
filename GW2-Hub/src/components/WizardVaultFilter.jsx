export default function ObjectiveFilter({ selected, onSelect }) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-bold transition-colors duration-300 ";
  const activeStyles = "bg-neutral-300 text-black";
  const inactiveStyles = "text-neutral-300 bg-red-800 hover:bg-black";

  const filters = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Special", value: "special" },
  ];

  return (
    <div className="flex justify-center space-x-4 my-6">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={`${baseStyles} ${
            selected === value ? activeStyles : inactiveStyles
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
