import "./cursos.css";
import React, { useState } from "react";
import bgCursos from "../assets/bg-cursos.png";
import {
  FaLaptopCode,
  FaChartLine,
  FaGavel,
  FaHeartbeat,
  FaClock,
  FaGraduationCap,
  FaSearch
} from "react-icons/fa";

export default function Cursos() {
  const cursos = [
  {
    nome: "Sistemas de Informação",
    area: "Tecnologia",
    descricao:
      "Forme-se para desenvolver soluções tecnológicas e inovadoras para os desafios do mundo digital.",
    duracao: "8 semestres",
    modalidade: "Presencial",
    img: "/si.png",
    icone: <FaLaptopCode />,
  },

  {
    nome: "Administração",
    area: "Negócios",
    descricao:
      "Desenvolva habilidades de gestão e liderança para atuar estrategicamente nas organizações.",
    duracao: "8 semestres",
    modalidade: "Presencial",
    img: "/admin.png",
    icone: <FaChartLine />,
  },

  {
    nome: "Direito",
    area: "Ciências Sociais",
    descricao:
      "Formação sólida para compreender e transformar a sociedade com ética, justiça e cidadania.",
    duracao: "10 semestres",
    modalidade: "Presencial",
    img: "/direito.png",
    icone: <FaGavel />,
  },

  {
    nome: "Enfermagem",
    area: "Saúde",
    descricao:
      "Prepare-se para cuidar, acolher e promover a saúde e o bem-estar das pessoas em todas as fases da vida.",
    duracao: "8 semestres",
    modalidade: "Presencial",
    img: "/enfermagem.png",
    icone: <FaHeartbeat />,
  },
];
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openLightbox = (img: string) => setLightboxImg(img);

  const closeLightbox = (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement>) => {
    e.stopPropagation();
    setLightboxImg(null);
  };

  return (
    <div className="page">
      <section
        className="cursos-hero"
        style={{ backgroundImage: `url(${bgCursos})` }}
      >
        <div className="cursos-hero-content">
          <h1>Nossos Cursos</h1>

          <div className="cursos-hero-text">
            <p>
              Conheça nossos cursos de graduação e encontre<br />
              o caminho ideal para o seu futuro profissional.
            </p>
          </div>
        </div>
      </section>

      <section className="cursos-section">
        <div className="filtros-cursos">
        <div className="campo-busca">
  <FaSearch />
  <span>Buscar curso...</span>
</div>
          <div className="campo-select">
  <FaGraduationCap />
  <span>Todas as áreas</span>
</div>
          <div className="campo-select">
  <FaGraduationCap />
  <span>Todas as modalidades</span>
</div>
          <button className="limpar-filtros">↻ Limpar filtros</button>
        </div>

        <div className="card-container">
          {cursos.map((c, i) => (
            <div className="curso-card" key={i}>
              <div className="curso-img-box" onClick={() => openLightbox(c.img)}>
                <img src={c.img} alt={c.nome} />
              </div>

              <div className="curso-icon">{c.icone}</div>

              <div className="curso-content">
                <h3>{c.nome}</h3>
                <span className="curso-area">{c.area}</span>

                <p>{c.descricao}</p>

                <div className="curso-info">
                  <div>
                    <strong><FaClock /> Duração</strong>
                    <span>{c.duracao}</span>
                  </div>

                  <div>
                    <strong><FaGraduationCap /> Modalidade</strong>
                    <span>{c.modalidade}</span>
                  </div>
                </div>

                <button className="btn-detalhes">
                  Ver detalhes <span>›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <img src={lightboxImg} alt="Curso" />
        </div>
      )}
    </div>
  );
}