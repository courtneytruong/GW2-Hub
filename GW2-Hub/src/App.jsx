import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CharacterList" element={<CharacterList />} />
        {/* future: <Route path="/character/:name" element={<CharacterDetail />} /> */}
      </Routes>
    </Router>
  );
}
