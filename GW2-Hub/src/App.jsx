import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import Layout from "./components/Layout";
import WizardVault from "./pages/WizardVault";
import Strikes from "./pages/Strikes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Every route below shares the Layout (and Navbar!) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="characters" element={<CharacterList />} />
          {/* future: <Route path="/character/:name" element={<CharacterDetail />} /> */}
          <Route path="wizardvault" element={<WizardVault />} />
          <Route path="strikes" element={<Strikes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="CharacterList" element={<CharacterList />} />
//         {/* future: <Route path="/character/:name" element={<CharacterDetail />} /> */}
//       </Routes>
//     </Router>
//   );
// }
