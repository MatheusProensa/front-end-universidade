import React from "react";
<<<<<<< HEAD
import bg from "../assets/bg.png"; // fundo
=======
import bg from "../assets/bg.png";
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99
import { FaGraduationCap, FaBook, FaUsers, FaBuilding } from "react-icons/fa";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-overlay">
        <h1 className="hero-title">
  Seu futuro<br />
  <span className="highlight">começa</span> aqui.
</h1>
        <p className="hero-text-line">
  Educação de qualidade, inovação e conexão para transformar vidas e o mundo.
</p>

        <div className="hero-buttons">
          <button className="btn-primary">Ver Cursos →</button>
          <button className="btn-secondary">Cadastre-se →</button>
        </div>

        <div className="hero-stats">
  <div className="stat-card">
    <FaGraduationCap size={40} />
    <h3>+15.000</h3>
    <p>Alunos formados</p>
  </div>
  <div className="stat-card">
    <FaBook size={40} />
    <h3>25+</h3>
    <p>Cursos de Graduação</p>
  </div>
  <div className="stat-card">
    <FaUsers size={40} />
    <h3>300+</h3>
    <p>Professores</p>
  </div>
  <div className="stat-card">
    <FaBuilding size={40} />
    <h3>5</h3>
    <p>Unidades</p>
  </div>
</div>
      </div>
    </div>
  );
}

=======
    <div className="home">
      {/* Hero/Banner */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-overlay">
          <h1>
            Seu futuro, <span className="highlight">nossa missão.</span>
          </h1>
          <p>
            Explore nossos cursos e cadastre-se como aluno ou professor.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Ver Cursos →</button>
            <button className="btn-secondary">Cadastre-se →</button>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="hero-stats">
        <div className="stat-card">
          <FaGraduationCap size={30} />
          <h3>+15.000</h3>
          <p>Alunos formados</p>
        </div>
        <div className="stat-card">
          <FaBook size={30} />
          <h3>25+</h3>
          <p>Cursos de Graduação</p>
        </div>
        <div className="stat-card">
          <FaUsers size={30} />
          <h3>300+</h3>
          <p>Professores</p>
        </div>
        <div className="stat-card">
          <FaBuilding size={30} />
          <h3>5</h3>
          <p>Unidades</p>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99
