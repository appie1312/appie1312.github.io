import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import List from "./pages/PokemonList.jsx";
import Teams from "./pages/teams.jsx";
import PokemonDetail from "./pages/PokemonDetail.jsx";

function App() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Simple header</span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/list" className="nav-link">
              List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teams" className="nav-link">
              Teams
            </Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/list/:name" element={<PokemonDetail />} /> 
      </Routes>
    </div>
  );
}

export default App;
