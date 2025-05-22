export default function ProgressBar({ current, complete }) {
  const progress = Math.min((current / complete) * 100, 100);

  return (
    <div className="relative w-full bg-gray-800 rounded-full h-4 overflow-hidden shadow-inner">
      <div
        className="bg-gradient-to-l from-green-500 to-green-900 h-full transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
          <p>
            {current} /{complete}
          </p>
        </div>
      </div>
    </div>
  );
}
