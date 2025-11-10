
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<h1>Bienvenue sur le Dashboard 🎉</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
