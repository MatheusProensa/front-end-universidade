import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroProfessor from "./pages/CadastroProfessor";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";

import "./App.css";
import logo from "./assets/logo-universidade.png";

export default function App() {

  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <Router>
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Universidade React" className="logo-img" />
        </div>
       <nav className="nav-links">
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? "active" : ""}
  >
    Home
  </NavLink>

  <NavLink 
    to="/cursos" 
    className={({ isActive }) => isActive ? "active" : ""}
  >
    Cursos
  </NavLink>

<NavLink 
  to="/sobre" 
  className={({ isActive }) => isActive ? "active" : ""}
>
  Sobre
</NavLink>

  <NavLink 
    to="/contato" 
    className={({ isActive }) => isActive ? "active" : ""}
  >
    Contato
  </NavLink>



 {/* DROPDOWN INSCREVA-SE */}
<div className="dropdown-inscricao">
  <button
    className="btn-inscreva"
    onClick={() => setMenuAberto(!menuAberto)}
  >
    Inscreva-se
  </button>

  {menuAberto && (
    <div className="dropdown-menu">
      <NavLink
        to="/cadastro-aluno"
        onClick={() => setMenuAberto(false)}
      >
        Aluno
      </NavLink>

      <NavLink
        to="/cadastro-professor"
        onClick={() => setMenuAberto(false)}
      >
        Professor
      </NavLink>
    </div>
  )}
</div>
</nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          <Route path="/cadastro-professor" element={<CadastroProfessor />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </Router>
  );
}

/* RESPONSIVO GERAL */

@media (max-width: 768px) {
  body {
    overflow-x: hidden;
  }

  .navbar {
    height: auto;
    padding: 16px 22px;
    flex-direction: column;
    gap: 14px;
  }

  .navbar nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
  }

  .navbar nav a {
    font-size: 0.9rem;
  }

  .navbar .btn-inscreva {
    width: 100%;
    max-width: 220px;
    justify-content: center;
  }

  .hero {
    min-height: auto;
    padding: 70px 22px 50px;
    background-position: center;
  }

  .hero-overlay {
    width: 100%;
    padding: 0;
  }

  .hero-title {
    font-size: 2.7rem;
    line-height: 1.05;
  }

  .hero-text-line {
    font-size: 1rem;
    max-width: 100%;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    width: 100%;
    max-width: 320px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    margin-top: 34px;
  }

  .stat-card svg {
    width: 30px;
    height: 30px;
  }

  .stat-card h3 {
    font-size: 1.1rem;
  }

  .stat-card p {
    font-size: 0.78rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.25rem;
  }

  .hero-stats {
    grid-template-columns: 1fr 1fr;
  }
}