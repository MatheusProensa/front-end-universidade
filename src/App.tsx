import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroProfessor from "./pages/CadastroProfessor";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursos";
import "./App.css";
import logo from "./assets/logo-universidade.png";

export default function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Universidade React" className="logo-img" />
        </div>
        <nav>
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
            to="/cadastro-aluno" 
            className={({ isActive }) => isActive ? "active" : ""} 
          >
            Cadastro Aluno
          </NavLink>
          <NavLink 
            to="/cadastro-professor" 
            className={({ isActive }) => isActive ? "active" : ""} 
          >
            Cadastro Professor
          </NavLink>
          <NavLink 
            to="/contato" 
            className={({ isActive }) => isActive ? "active" : ""} 
          >
            Contato
          </NavLink>
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