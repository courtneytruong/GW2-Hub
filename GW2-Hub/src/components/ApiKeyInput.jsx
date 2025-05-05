import { useState } from "react";

//Lets user input their GW2 API key and store it in localStorage (for now)
export default function ApiKeyInput({ onSubmit }) {
  const [key, setKey] = useState("");

  const handleSave = () => {
    localStorage.setItem("gw2_api_key", key);
    onSubmit(key);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter your GW2 API key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSave}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
