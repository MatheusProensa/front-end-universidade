import bg from "../assets/bg.png"; // fundo
import { FaGraduationCap, FaBook, FaUsers, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home() {
  return (
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
          <Link to="/cursos" className="btn-primary">
          Ver Cursos →
          </Link>
          <Link to="/sobre" className="btn-secondary">
           Sobre a Universidade →
          </Link>
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
