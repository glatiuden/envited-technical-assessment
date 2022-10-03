import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Create from "./pages/Create/Create";
import Event from "./pages/Event/Event";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
