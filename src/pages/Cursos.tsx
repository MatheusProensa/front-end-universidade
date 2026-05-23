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
      <h2 className="page-title">Nossos Cursos</h2>

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