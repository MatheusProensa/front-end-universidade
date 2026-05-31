import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CURSOS, CountUp, CourseCard } from "../App";

const GALERIA = [
  { img: "/assets/campus/campus-principal.png", icon: "fa-location-dot", label: "Campus principal", big: true },
  { img: "/assets/campus/lab-informatica.png", icon: "fa-laptop-code", label: "Laboratório de informática" },
  { img: "/assets/campus/lab-saude.png", icon: "fa-microscope", label: "Laboratórios de saúde" },
  { img: "/assets/campus/convivencia.png", icon: "fa-users", label: "Espaços de convivência" },
  { img: "/assets/campus/estrutura-esportiva.png", icon: "fa-dumbbell", label: "Estrutura esportiva" },
];
const DEPO = [
  { ini: "MA", img: "/assets/depoimentos/marina.png", txt: "A estrutura e os professores fizeram toda a diferença. Saí da graduação já trabalhando na área que sempre sonhei.", nome: "Marina Alves", curso: "Sistemas de Informação" },
  { ini: "RC", img: "/assets/depoimentos/rafael.png", txt: "As parcerias com empresas me garantiram estágio já no segundo ano. Hoje sou efetivado e devo muito à universidade.", nome: "Rafael Costa", curso: "Administração" },
  { ini: "JS", img: "/assets/depoimentos/julia.png", txt: "O programa de intercâmbio mudou minha vida. Estudei fora por um semestre e voltei com uma visão totalmente nova.", nome: "Júlia Santos", curso: "Direito" },
];
const MODS = [
  { icon: "fa-chalkboard-user", t: "Presencial", p: "Aulas no campus com infraestrutura completa e contato direto com professores e colegas." },
  { icon: "fa-laptop-file", t: "Híbrido", p: "Combine encontros presenciais com atividades online, equilibrando flexibilidade e convivência." },
  { icon: "fa-wifi", t: "EAD", p: "Estude 100% a distância, no seu ritmo, com material digital e tutoria especializada." },
  { icon: "fa-user-graduate", t: "Pós-graduação", p: "Especializações e MBAs para aprofundar conhecimento e impulsionar sua carreira." },
];
const NEWS = [
  { id: "vestibular", img: "/assets/bg-sobre.png", cat: "Vestibular", data: "15 mar 2026", titulo: "Matrículas abertas para o vestibular 2026/1", txt: "Inscreva-se e garanta sua vaga em um dos nossos cursos de graduação. Bolsas disponíveis." },
  { id: "semana", img: "/assets/news/semana-academica.png", cat: "Evento", data: "28 mar 2026", titulo: "Semana Acadêmica reúne palestras e workshops", txt: "Cinco dias de imersão com profissionais do mercado, oficinas práticas e networking." },
  { id: "feira", img: "/assets/news/feira-profissoes.png", cat: "Carreira", data: "02 abr 2026", titulo: "Feira de Profissões conecta alunos a empresas", txt: "Mais de 40 empresas parceiras apresentam oportunidades de estágio e emprego." },
];

export default function Home() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="page active" data-page="home">
      <div className="hero" style={{ backgroundImage: "url('/assets/bg.png')" }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Seu futuro<br /><span className="hl">começa</span> aqui.</h1>
          <p className="hero-text">Educação de qualidade, inovação e conexão para transformar vidas e o mundo.</p>
          <div className="hero-buttons">
            <button className="btn btn--gradient" onClick={() => navigate("/cursos")}>Ver cursos →</button>
            <button className="btn btn--outline" onClick={() => navigate("/sobre")}>Sobre a Universidade →</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><i className="fa-solid fa-graduation-cap"></i><span className="v"><CountUp end={15000} prefix="+" /></span><span className="l">Alunos formados</span></div>
            <div className="stat"><i className="fa-solid fa-book"></i><span className="v"><CountUp end={25} suffix="+" /></span><span className="l">Cursos de graduação</span></div>
            <div className="stat"><i className="fa-solid fa-users"></i><span className="v"><CountUp end={300} suffix="+" /></span><span className="l">Professores</span></div>
            <div className="stat"><i className="fa-solid fa-building"></i><span className="v"><CountUp end={5} /></span><span className="l">Unidades</span></div>
          </div>
        </div>
      </div>

      <div className="trust"><div className="trust-inner">
        <span><i className="fa-solid fa-award"></i> Nota máxima no MEC</span>
        <span><i className="fa-solid fa-handshake"></i> Parcerias com o mercado</span>
        <span><i className="fa-solid fa-globe"></i> Intercâmbio internacional</span>
        <span><i className="fa-solid fa-flask"></i> Laboratórios modernos</span>
      </div></div>

      <div className="section">
        <header className="home-head"><span className="eyebrow">Graduação</span><h2 className="sec-title">Cursos em destaque</h2><span className="accent"></span></header>
        <div className="course-grid">
          {CURSOS.slice(0, 4).map((c) => <CourseCard key={c.nome} c={c} onDetails={() => navigate("/cursos")} />)}
        </div>
        <div className="center-btn"><button className="btn btn--primary" onClick={() => navigate("/cursos")}>Ver todos os cursos →</button></div>
      </div>

      <div className="section">
        <header className="home-head"><span className="eyebrow">Estrutura</span><h2 className="sec-title">Conheça nosso campus</h2><span className="accent"></span></header>
        <div className="galeria">
          {GALERIA.map((g) => (
            <figure key={g.img} className={`galeria-item ${g.big ? "g-big" : ""}`} onClick={() => setLightbox(g.img)}>
              <img src={g.img} alt={g.label} loading="lazy" />
              <figcaption><i className={`fa-solid ${g.icon}`}></i> {g.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="depoimentos-wrap"><div className="section">
        <header className="home-head"><span className="eyebrow">Depoimentos</span><h2 className="sec-title">Quem estuda aqui, recomenda</h2><span className="accent"></span></header>
        <div className="depoimentos">
          {DEPO.map((d) => (
            <figure key={d.ini} className="depo-card">
              <div className="depo-stars">{[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}</div>
              <blockquote>{d.txt}</blockquote>
              <figcaption><span className="depo-avatar"><img src={d.img} alt={d.nome} /></span><div><strong>{d.nome}</strong><span>{d.curso}</span></div></figcaption>
            </figure>
          ))}
        </div>
      </div></div>

      <div className="section">
        <header className="home-head"><span className="eyebrow">Modalidades</span><h2 className="sec-title">Estude do seu jeito</h2><span className="accent"></span></header>
        <div className="modalidades">
          {MODS.map((m) => (
            <div key={m.t} className="modalidade"><div className="mod-icon"><i className={`fa-solid ${m.icon}`}></i></div><h4>{m.t}</h4><p>{m.p}</p></div>
          ))}
        </div>
      </div>

      <div className="noticias-wrap"><div className="section">
        <header className="home-head"><span className="eyebrow">Fique por dentro</span><h2 className="sec-title">Notícias e eventos</h2><span className="accent"></span></header>
        <div className="noticias">
          {NEWS.map((n) => (
            <article key={n.id} className="noticia">
              <div className="noticia-img" style={{ backgroundImage: `url('${n.img}')` }}><span className="noticia-cat">{n.cat}</span></div>
              <div className="noticia-body">
                <span className="noticia-data"><i className="fa-regular fa-calendar"></i> {n.data}</span>
                <h3>{n.titulo}</h3>
                <p>{n.txt}</p>
                <button className="noticia-link" onClick={() => navigate("/atendimento")}>Ler mais →</button>
              </div>
            </article>
          ))}
        </div>
      </div></div>

      <div className="cta-band"><div className="cta-inner">
        <div><h2>Pronto para começar sua jornada?</h2><p>Inscreva-se hoje e dê o primeiro passo rumo ao seu futuro profissional.</p></div>
        <div className="cta-actions">
          <button className="btn btn--yellow" onClick={() => navigate("/cadastro-aluno")}>Quero ser aluno →</button>
          <button className="btn btn--outline" onClick={() => navigate("/cadastro-professor")}>Quero ser professor →</button>
        </div>
      </div></div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Fechar"><i className="fa-solid fa-xmark"></i></button>
          <img src={lightbox} alt="" />
        </div>
      )}
    </section>
  );
}
