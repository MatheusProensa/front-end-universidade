import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99
import Home from "./pages/Home";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroProfessor from "./pages/CadastroProfessor";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursos";
import "./App.css";
<<<<<<< HEAD
import logo from "./assets/logo-universidade.png";
=======
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99

export default function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo-container">
<<<<<<< HEAD
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
=======
          <img src="/assets/bg.png" alt="Universidade React" className="logo-img" />
          <h1 className="logo-text">Universidade React</h1>
        </div>
        <nav>
          <Link to="/" className="active">Home</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/cadastro-aluno">Cadastro Aluno</Link>
          <Link to="/cadastro-professor">Cadastro Professor</Link>
          <Link to="/contato">Contato</Link>
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          <Route path="/cadastro-professor" element={<CadastroProfessor />} />
          <Route path="/contato" element={<Contato />} />
=======
          <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          <Route path="/cadastro-professor" element={<CadastroProfessor />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cursos" element={<Cursos />} />
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99
        </Routes>
      </main>
    </Router>
  );
}