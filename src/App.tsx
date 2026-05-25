import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroProfessor from "./pages/CadastroProfessor";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursos";
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
        </Routes>
      </main>
    </Router>
  );
}