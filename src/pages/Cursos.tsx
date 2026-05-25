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

import {
  GraduationCap,
  Building2,
  Users,
  FileText
} from "lucide-react";

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

  const [busca, setBusca] = useState("");
  const [areaSelecionada, setAreaSelecionada] = useState("Todas");
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState("Todas");

  const cursosFiltrados = cursos.filter((curso) => {
    const nomeCombina = curso.nome.toLowerCase().includes(busca.toLowerCase());

    const areaCombina =
      areaSelecionada === "Todas" || curso.area === areaSelecionada;

    const modalidadeCombina =
      modalidadeSelecionada === "Todas" ||
      curso.modalidade === modalidadeSelecionada;

    return nomeCombina && areaCombina && modalidadeCombina;
  });

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

    <input
      type="text"
      placeholder="Buscar curso..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  </div>

  <select
    className="campo-select"
    value={areaSelecionada}
    onChange={(e) => setAreaSelecionada(e.target.value)}
  >
    <option value="Todas">Todas as áreas</option>
    <option value="Tecnologia">Tecnologia</option>
    <option value="Negócios">Negócios</option>
    <option value="Ciências Sociais">Ciências Sociais</option>
    <option value="Saúde">Saúde</option>
  </select>

  <select
    className="campo-select"
    value={modalidadeSelecionada}
    onChange={(e) => setModalidadeSelecionada(e.target.value)}
  >
    <option value="Todas">Todas as modalidades</option>
    <option value="Presencial">Presencial</option>
  </select>

  <button
    className="limpar-filtros"
    onClick={() => {
      setBusca("");
      setAreaSelecionada("Todas");
      setModalidadeSelecionada("Todas");
    }}
  >
    ↻ Limpar filtros
  </button>
</div>

        <div className="card-container">
          {cursosFiltrados.map((c, i) => (
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

  <div className="info-item">
    <FaClock />

    <div>
      <strong>Duração</strong>
      <span>{c.duracao}</span>
    </div>
  </div>

  <div className="info-item">
    <FaGraduationCap />

    <div>
      <strong>Modalidade</strong>
      <span>{c.modalidade}</span>
    </div>
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

<section className="beneficios-section">

  <div className="beneficio-card">
    <div className="beneficio-icon"><GraduationCap /></div>

    <div>
      <h4>Ensino de Qualidade</h4>
      <p>
        Professores experientes e metodologias inovadoras para a sua formação.
      </p>
    </div>
  </div>

  <div className="beneficio-card">
    <div className="beneficio-icon"><Building2 /></div>

    <div>
      <h4>Infraestrutura Completa</h4>
      <p>
        Laboratórios modernos, bibliotecas e espaços de aprendizagem.
      </p>
    </div>
  </div>

  <div className="beneficio-card">
    <div className="beneficio-icon"><Users /></div>

    <div>
      <h4>Conexão com o Mercado</h4>
      <p>
        Parcerias com empresas e oportunidades de estágio e emprego.
      </p>
    </div>
  </div>

  <div className="beneficio-card">
    <div className="beneficio-icon"><FileText /></div>

    <div>
      <h4>Formação Completa</h4>
      <p>
        Desenvolvimento técnico, humano e profissional para o seu futuro.
      </p>
    </div>
  </div>

</section>

<section className="consultor-section">

  <div className="consultor-texto">
    <div className="consultor-icon"><GraduationCap /></div>

    <div>
      <h3>Não encontrou o curso que procura?</h3>

      <p>
        Fale com a nossa equipe e descubra outras opções de graduação.
      </p>
    </div>
  </div>

  <button className="consultor-btn">
    FALAR COM UM CONSULTOR →
  </button>

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