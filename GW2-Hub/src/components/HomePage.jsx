import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex justify-center text-gray-800 p-4">
      <div className="text-center bg-gradient-to-t from-black to-red-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl text-white font-extrabold mb-4">
          Track. Achieve. Conquer.
        </h1>
        <p className="text-lg text-white mb-6">
          Welcome to <span className="font-semibold">GW2 Hub</span> — your
          one-stop hub for tracking goals and conquering progress like a legend.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/signin"
            className="px-6 py-3 bg-black border p-2 rounded text-white font-semibold rounded-xl hover:bg-red-900 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-black border p-2 rounded text-white font-semibold rounded-xl hover:bg-red-800 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
