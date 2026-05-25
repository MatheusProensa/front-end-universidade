import './cursos.css';
import React, { useState } from "react";
import bgCursos from "../assets/bg-cursos.png";

export default function Cursos() {
  const cursos = [
    { nome: "Sistemas de Informação", duracao: "4 anos", img: "/si.png" },
    { nome: "Administração", duracao: "4 anos", img: "/admin.png" },
    { nome: "Direito", duracao: "5 anos", img: "/direito.png" },
    { nome: "Enfermagem", duracao: "4 anos", img: "/enfermagem.png" },
  ];

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openLightbox = (img: string) => setLightboxImg(img);
  const closeLightbox = (e: React.MouseEvent<HTMLDivElement>) => {
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

      <div className="card-container">
        {cursos.map((c, i) => (
          <div className="card" key={i} onClick={() => openLightbox(c.img)}>
  <img src={c.img} alt={c.nome} />
  <div className="card-content">
    {/* removi título e duração da tela, já estão na arte */}
       </div>
</div>
        ))}
      </div>

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <img src={lightboxImg} alt="Curso" />
        </div>
      )}
    </div>
  );
}