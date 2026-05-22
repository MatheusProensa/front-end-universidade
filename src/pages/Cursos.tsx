import './cursos.css';
import React, { useState } from "react";

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
      {/* Título fixo e destacado */}
      <h2 className="page-title">Nossos Cursos</h2>

      <div className="card-container">
        {cursos.map((c, i) => (
          <div
            className="card"
            key={i}
            style={{ backgroundImage: `url(${c.img})` }}
            onClick={() => openLightbox(c.img)}
          >
            <h3>{c.nome}</h3>
            <p>Duração: {c.duracao}</p>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <img src={lightboxImg} alt="Curso" />
        </div>
      )}
    </div>
  );
}