import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroProfessor from "./pages/CadastroProfessor";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursos";
import "./App.css";

export default function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo-container">
          <img src="/assets/bg.png" alt="Universidade React" className="logo-img" />
          <h1 className="logo-text">Universidade React</h1>
        </div>
        <nav>
          <Link to="/" className="active">Home</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/cadastro-aluno">Cadastro Aluno</Link>
          <Link to="/cadastro-professor">Cadastro Professor</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          <Route path="/cadastro-professor" element={<CadastroProfessor />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </main>
    </Router>
  );
}