import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CURSOS, AREAS, type Curso, CourseCard } from "../App";
import "./cursos.css";

export default function Cursos() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [area, setArea] = useState("Todas");
  const [mod, setMod] = useState("Todas");
  const [sel, setSel] = useState<Curso | null>(null);

  const lista = CURSOS.filter(
    (c) =>
      c.nome.toLowerCase().includes(busca.toLowerCase()) &&
      (area === "Todas" || c.area === area) &&
      (mod === "Todas" || c.mod === mod)
  );

  return (
    <section className="page active">
      <div className="page-banner" style={{ backgroundImage: "url('/assets/bg-cursos.png')" }}>
        <div className="container"><h1>Nossos Cursos</h1><div className="banner-text"><p>Conheça nossos cursos de graduação e encontre o caminho ideal para o seu futuro profissional.</p></div></div>
      </div>

      <div className="section">
        <div className="filters">
          <div className="field"><i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Buscar curso..." aria-label="Buscar curso" value={busca} onChange={(e) => setBusca(e.target.value)} /></div>
          <div className="field"><select aria-label="Filtrar por área" value={area} onChange={(e) => setArea(e.target.value)}><option value="Todas">Todas as áreas</option>{AREAS.map((a) => <option key={a} value={a}>{a}</option>)}</select></div>
          <div className="field"><select aria-label="Filtrar por modalidade" value={mod} onChange={(e) => setMod(e.target.value)}><option value="Todas">Todas as modalidades</option><option value="Presencial">Presencial</option></select></div>
          <button className="clear-filters" onClick={() => { setBusca(""); setArea("Todas"); setMod("Todas"); }}><i className="fa-solid fa-rotate-right"></i> Limpar filtros</button>
        </div>
        <div className="course-grid">
          {lista.length ? lista.map((c) => <CourseCard key={c.nome} c={c} onDetails={setSel} />) : (
            <p style={{ gridColumn: "1/-1", color: "var(--t-muted)", padding: "24px 0" }}>Nenhum curso encontrado para os filtros selecionados.</p>
          )}
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="benefits">
          <div className="benefit"><div className="benefit-icon"><i className="fa-solid fa-graduation-cap"></i></div><div><h4>Ensino de Qualidade</h4><p>Professores experientes e metodologias inovadoras para a sua formação.</p></div></div>
          <div className="benefit"><div className="benefit-icon"><i className="fa-solid fa-building"></i></div><div><h4>Infraestrutura Completa</h4><p>Laboratórios modernos, bibliotecas e espaços de aprendizagem.</p></div></div>
          <div className="benefit"><div className="benefit-icon"><i className="fa-solid fa-users"></i></div><div><h4>Conexão com o Mercado</h4><p>Parcerias com empresas e oportunidades de estágio e emprego.</p></div></div>
          <div className="benefit"><div className="benefit-icon"><i className="fa-solid fa-file-lines"></i></div><div><h4>Formação Completa</h4><p>Desenvolvimento técnico, humano e profissional para o seu futuro.</p></div></div>
        </div>
        <div className="consultor">
          <div className="consultor-l"><div className="consultor-icon"><i className="fa-solid fa-graduation-cap"></i></div><div><h3>Não encontrou o curso que procura?</h3><p>Fale com a nossa equipe e descubra outras opções de graduação.</p></div></div>
          <button className="btn btn--yellow" onClick={() => navigate("/atendimento")}>Falar com um consultor →</button>
        </div>
      </div>

      {sel && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setSel(null); }}>
          <div className="modal-card" role="dialog" aria-modal="true">
            <button className="modal-close" aria-label="Fechar" onClick={() => setSel(null)}><i className="fa-solid fa-xmark"></i></button>
            <div className="modal-hero">
              <img src={sel.img} alt={sel.nome} /><div className="modal-hero-grad"></div>
              <div className="modal-hero-text"><span className="modal-chip"><i className={`fa-solid ${sel.icon}`}></i></span><h2>{sel.nome}</h2><span className="modal-area">{sel.area}</span></div>
            </div>
            <div className="modal-body">
              <p className="modal-desc">{sel.desc}</p>
              <div className="modal-meta">
                <div><i className="fa-solid fa-clock"></i><div><strong>Duração</strong><span>{sel.dur}</span></div></div>
                <div><i className="fa-solid fa-graduation-cap"></i><div><strong>Modalidade</strong><span>{sel.mod}</span></div></div>
                <div><i className="fa-solid fa-sun"></i><div><strong>Turno</strong><span>{sel.turno}</span></div></div>
                <div><i className="fa-solid fa-layer-group"></i><div><strong>Área</strong><span>{sel.area}</span></div></div>
              </div>
              <div className="modal-cols">
                <div>
                  <h4><i className="fa-solid fa-list-check"></i> O que você vai aprender</h4>
                  <ul className="modal-grade">{sel.grade.map((g) => <li key={g}><i className="fa-solid fa-check"></i>{g}</li>)}</ul>
                </div>
                <div>
                  <h4><i className="fa-solid fa-briefcase"></i> Mercado de trabalho</h4>
                  <p className="modal-mercado">{sel.mercado}</p>
                </div>
              </div>
              <div className="modal-actions">
                <button className="btn btn--primary" onClick={() => { setSel(null); navigate("/cadastro-aluno"); }}>Inscreva-se neste curso →</button>
                <button className="btn btn--outline-dark" onClick={() => { setSel(null); navigate("/contato"); }}>Falar com consultor</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
