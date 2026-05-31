import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Vestibular from "./pages/Vestibular";
import Sobre from "./pages/Sobre";
import Atendimento from "./pages/Atendimento";
import CadastroAluno from "./pages/CadastroAluno";
import CadastroProfessor from "./pages/CadastroProfessor";
import Login from "./pages/Login";
import { applyLang } from "./i18n";

import "./App.css";

/* ============================================================
   DADOS (cursos) — compartilhados por Home e Cursos
   ============================================================ */
export interface Curso {
  nome: string; area: string; dur: string; mod: string; turno: string;
  img: string; icon: string; desc: string; grade: string[]; mercado: string;
}
export const AREAS = ["Tecnologia", "Negócios", "Ciências Sociais", "Saúde", "Comunicação", "Biológicas"];
export const CURSOS: Curso[] = [
  { nome: "Sistemas de Informação", area: "Tecnologia", dur: "8 semestres", mod: "Presencial", turno: "Noturno", img: "/assets/courses/si.png", icon: "fa-laptop-code",
    desc: "Forme-se para desenvolver soluções tecnológicas e inovadoras para os desafios do mundo digital.",
    grade: ["Lógica e algoritmos", "Desenvolvimento web e mobile", "Banco de dados e nuvem", "Engenharia de software", "Segurança da informação", "Gestão de projetos de TI"],
    mercado: "Atue como desenvolvedor, analista de sistemas, engenheiro de software, especialista em dados ou gestor de TI em empresas de tecnologia, startups e grandes corporações." },
  { nome: "Administração", area: "Negócios", dur: "8 semestres", mod: "Presencial", turno: "Matutino / Noturno", img: "/assets/courses/admin.png", icon: "fa-chart-line",
    desc: "Desenvolva habilidades de gestão e liderança para atuar estrategicamente nas organizações.",
    grade: ["Gestão estratégica", "Finanças corporativas", "Marketing e vendas", "Gestão de pessoas", "Empreendedorismo", "Logística e operações"],
    mercado: "Trabalhe em gestão de empresas, consultoria, finanças, recursos humanos ou abra seu próprio negócio com base sólida em estratégia e liderança." },
  { nome: "Direito", area: "Ciências Sociais", dur: "10 semestres", mod: "Presencial", turno: "Matutino / Noturno", img: "/assets/courses/direito.png", icon: "fa-gavel",
    desc: "Formação sólida para compreender e transformar a sociedade com ética, justiça e cidadania.",
    grade: ["Direito constitucional", "Direito civil e penal", "Direito do trabalho", "Processo e prática jurídica", "Mediação e arbitragem", "Ética e cidadania"],
    mercado: "Siga carreira na advocacia, magistratura, Ministério Público, defensoria, departamentos jurídicos ou concursos públicos." },
  { nome: "Enfermagem", area: "Saúde", dur: "8 semestres", mod: "Presencial", turno: "Integral", img: "/assets/courses/enfermagem.png", icon: "fa-heart-pulse",
    desc: "Prepare-se para cuidar, acolher e promover a saúde e o bem-estar das pessoas em todas as fases da vida.",
    grade: ["Anatomia e fisiologia", "Cuidados clínicos", "Saúde pública", "Enfermagem materno-infantil", "Urgência e emergência", "Estágio supervisionado"],
    mercado: "Atue em hospitais, clínicas, unidades de saúde, home care, saúde pública e gestão em enfermagem." },
  { nome: "Design Gráfico", area: "Comunicação", dur: "8 semestres", mod: "Presencial", turno: "Noturno", img: "/assets/courses/design.png", icon: "fa-pen-nib",
    desc: "Criação visual, branding, interfaces digitais e projetos criativos para o mercado moderno.",
    grade: ["Fundamentos do design", "Tipografia e cor", "Identidade visual e branding", "UI/UX design", "Motion e audiovisual", "Projeto integrador"],
    mercado: "Trabalhe em agências, estúdios criativos, marketing digital, design de produto (UI/UX) ou como freelancer e empreendedor criativo." },
  { nome: "Educação Física", area: "Saúde", dur: "8 semestres", mod: "Presencial", turno: "Matutino", img: "/assets/courses/educacaofisica.png", icon: "fa-dumbbell",
    desc: "Formação voltada para treinamento esportivo, saúde, performance e qualidade de vida.",
    grade: ["Anatomia e biomecânica", "Fisiologia do exercício", "Treinamento esportivo", "Saúde e qualidade de vida", "Esportes coletivos", "Estágio em academias e clubes"],
    mercado: "Atue como personal trainer, preparador físico, professor, gestor esportivo ou na área de saúde e reabilitação." },
  { nome: "Medicina Veterinária", area: "Saúde", dur: "10 semestres", mod: "Presencial", turno: "Integral", img: "/assets/courses/veterinaria.png", icon: "fa-paw",
    desc: "Aprenda sobre cuidado animal, diagnóstico clínico e atuação em diversas áreas veterinárias.",
    grade: ["Anatomia animal", "Clínica médica e cirúrgica", "Diagnóstico por imagem", "Produção animal", "Saúde pública veterinária", "Estágio clínico"],
    mercado: "Trabalhe em clínicas e hospitais veterinários, agronegócio, pesquisa, vigilância sanitária ou com animais silvestres." },
  { nome: "Biomedicina", area: "Biológicas", dur: "8 semestres", mod: "Presencial", turno: "Noturno", img: "/assets/courses/biomedicina.png", icon: "fa-microscope",
    desc: "Atuação em análises clínicas, laboratórios, pesquisa científica e inovação na saúde.",
    grade: ["Biologia celular e molecular", "Análises clínicas", "Microbiologia e imunologia", "Genética", "Hematologia", "Pesquisa científica"],
    mercado: "Atue em laboratórios de análises clínicas, pesquisa, biotecnologia, imagenologia ou indústria farmacêutica." },
];

/* ============================================================
   COMPONENTES COMPARTILHADOS (exportados p/ as páginas)
   ============================================================ */
export function CountUp({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const start = () => {
      if (done.current) return; done.current = true;
      const dur = 1600, t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        setV(Math.floor((1 - Math.pow(1 - p, 3)) * end));
        if (p < 1) requestAnimationFrame(tick); else setV(end);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && start()), { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{prefix}{v.toLocaleString("pt-BR")}{suffix}</span>;
}

export function CourseCard({ c, onDetails }: { c: Curso; onDetails: (c: Curso) => void }) {
  return (
    <article className="course-card">
      <div className="course-img"><img src={c.img} alt={c.nome} loading="lazy" /></div>
      <div className="course-chip"><i className={`fa-solid ${c.icon}`}></i></div>
      <div className="course-body">
        <h3>{c.nome}</h3>
        <span className="course-area">{c.area}</span>
        <p>{c.desc}</p>
        <div className="course-info">
          <div className="info-item"><i className="fa-solid fa-clock"></i><div><strong>Duração</strong><span>{c.dur}</span></div></div>
          <div className="info-item"><i className="fa-solid fa-graduation-cap"></i><div><strong>Modalidade</strong><span>{c.mod}</span></div></div>
        </div>
        <button className="btn-detalhes" onClick={() => onDetails(c)}>Ver detalhes <span>›</span></button>
      </div>
    </article>
  );
}

export function JsForm({ okTitle, okMsg, submitLabel, heading, children }: {
  okTitle: string; okMsg: string; submitLabel: string; heading: ReactNode; children: ReactNode;
}) {
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();
  if (ok) {
    return (
      <div className="split-white">
        <div className="form-sucesso">
          <div className="sucesso-icon"><i className="fa-solid fa-check"></i></div>
          <h3>{okTitle}</h3><p>{okMsg}</p>
          <button className="btn btn--primary" type="button" onClick={() => navigate("/")}>Voltar para o início</button>
        </div>
      </div>
    );
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); let valid = true;
    e.currentTarget.querySelectorAll("input, textarea, select").forEach((c) => {
      const el = c as HTMLInputElement;
      if (!el.value.trim()) { el.classList.add("erro"); valid = false; } else el.classList.remove("erro");
    });
    if (valid) setOk(true);
  };
  return (
    <form className="split-white js-form" onSubmit={onSubmit}>
      {heading}{children}
      <button className="btn btn--primary btn--full" type="submit">{submitLabel}</button>
    </form>
  );
}

/* ============================================================
   NAVBAR
   ============================================================ */
function Navbar({ lang, onToggleLang }: { lang: "pt" | "en"; onToggleLang: () => void }) {
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDrop(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setDrop(false); setMenu(false); } };
    document.addEventListener("mousedown", onClick); document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
  }, []);
  const close = () => { setMenu(false); setDrop(false); };
  const cls = ({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link");
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="logo-container" onClick={close} aria-label="Universidade React — início">
          <img src="/assets/logo-universidade.png" alt="Universidade React" className="logo-img" />
        </NavLink>
        <button className="nav-toggle" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
          <i className={menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
        <nav className={`nav-links ${menu ? "open" : ""}`} aria-label="Navegação principal">
          <NavLink to="/" className={cls} onClick={close}>Home</NavLink>
          <NavLink to="/cursos" className={cls} onClick={close}>Cursos</NavLink>
          <NavLink to="/vestibular" className={cls} onClick={close}>Vestibular</NavLink>
          <NavLink to="/sobre" className={cls} onClick={close}>Sobre</NavLink>
          <NavLink to="/atendimento" className={cls} onClick={close}>Atendimento</NavLink>
          <div className="dropdown" ref={dropRef}>
            <button className="btn-inscreva" aria-haspopup="true" aria-expanded={drop} onClick={() => setDrop((v) => !v)}>
              Inscreva-se <i className={`fa-solid fa-chevron-down chevron ${drop ? "open" : ""}`}></i>
            </button>
            {drop && (
              <div className="dropdown-menu" role="menu">
                <NavLink to="/cadastro-aluno" role="menuitem" onClick={close}>Aluno</NavLink>
                <NavLink to="/cadastro-professor" role="menuitem" onClick={close}>Professor</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/login" className="nav-portal" onClick={close}><i className="fa-solid fa-circle-user"></i> Portal do Aluno</NavLink>
          <button className="lang-toggle" aria-label="Switch language" onClick={onToggleLang}><i className="fa-solid fa-globe"></i> <span>{lang === "pt" ? "EN" : "PT"}</span></button>
        </nav>
      </div>
    </header>
  );
}

/* ============================================================
   RODAPÉ
   ============================================================ */
function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/logo-universidade.png" alt="Universidade React" className="footer-logo" />
          <p>Educação de qualidade, inovação e conexão para transformar vidas e o mundo.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/5555981292693" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <nav className="footer-col" aria-label="Institucional">
          <h4>Institucional</h4>
          <NavLink to="/sobre">Sobre a Universidade</NavLink>
          <NavLink to="/cursos">Cursos</NavLink>
          <NavLink to="/vestibular">Vestibular</NavLink>
          <NavLink to="/atendimento">Atendimento</NavLink>
        </nav>
        <nav className="footer-col" aria-label="Inscrições">
          <h4>Inscreva-se</h4>
          <NavLink to="/cadastro-aluno">Sou aluno</NavLink>
          <NavLink to="/cadastro-professor">Sou professor</NavLink>
        </nav>
        <div className="footer-col">
          <h4>Contato</h4>
          <a href="mailto:contato@universidadereact.com"><i className="fa-solid fa-envelope"></i> contato@universidadereact.com</a>
          <span><i className="fa-solid fa-location-dot"></i> Rua Inspiração, 123 — Santa Maria, RS</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {ano} Universidade React. Todos os direitos reservados.</span>
        <span>Desenvolvido por <strong>Matheus Proensa</strong></span>
      </div>
    </footer>
  );
}

/* ============================================================
   BOTÕES FLUTUANTES (voltar ao topo • acessibilidade • chat)
   ============================================================ */
const CHAT_RESP: Record<string, { txt: string; acao?: { label: string; nav?: string; wpp?: boolean } }> = {
  cursos: { txt: "Temos 25+ cursos de graduação nas áreas de Tecnologia, Saúde, Negócios, Comunicação e mais. Quer dar uma olhada?", acao: { label: "Ver cursos", nav: "/cursos" } },
  inscrever: { txt: "Inscrever-se é rápido: escolha o curso e preencha o formulário online. Posso te levar até lá!", acao: { label: "Fazer inscrição", nav: "/cadastro-aluno" } },
  bolsas: { txt: "Oferecemos bolsas próprias, ProUni e FIES, além de descontos especiais. Fale com nossa equipe na página de Atendimento.", acao: { label: "Ver Atendimento", nav: "/atendimento" } },
  humano: { txt: "Claro! Você pode falar agora com nossa equipe pelo WhatsApp 👇", acao: { label: "Abrir WhatsApp", wpp: true } },
};
const CHAT_QUICK = [
  { id: "cursos", label: "Quero ver os cursos" },
  { id: "inscrever", label: "Como me inscrever?" },
  { id: "bolsas", label: "Bolsas e financiamento" },
  { id: "humano", label: "Falar com atendimento humano" },
];
type Msg = { tipo: "bot" | "user"; txt: string; acao?: { label: string; nav?: string; wpp?: boolean } };

function FloatingWidgets() {
  const navigate = useNavigate();
  const [topVisible, setTopVisible] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [scale, setScale] = useState(() => parseFloat(localStorage.getItem("ur-font") || "1"));
  const [chatOpen, setChatOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setTopVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.fontSize = 16 * scale + "px";
    localStorage.setItem("ur-font", String(scale));
  }, [scale]);
  useEffect(() => { if (localStorage.getItem("ur-contrast") === "1") document.body.classList.add("alto-contraste"); }, []);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; if (localStorage.getItem("ur-lang") === "en") requestAnimationFrame(() => applyLang("en")); }, [msgs]);

  const openChat = () => {
    setChatOpen(true);
    if (!started) { setStarted(true); setMsgs([{ tipo: "bot", txt: "Olá! 👋 Sou o Léo, assistente virtual da Universidade React. Como posso ajudar hoje?" }]); }
  };
  const respond = (id: string) => {
    const r = CHAT_RESP[id];
    setTimeout(() => setMsgs((m) => [...m, r ? { tipo: "bot", txt: r.txt, acao: r.acao } : { tipo: "bot", txt: "Posso te ajudar com cursos, inscrição e bolsas. Para outros assuntos, fale com nosso atendimento humano 😊" }]), 400);
  };
  const quick = (q: { id: string; label: string }) => { setMsgs((m) => [...m, { tipo: "user", txt: q.label }]); respond(q.id); };
  const send = (e: FormEvent) => {
    e.preventDefault(); const t = text.trim(); if (!t) return;
    setMsgs((m) => [...m, { tipo: "user", txt: t }]); setText("");
    const s = t.toLowerCase();
    if (s.includes("curso")) respond("cursos");
    else if (s.includes("inscri") || s.includes("matr")) respond("inscrever");
    else if (s.includes("bolsa") || s.includes("financ")) respond("bolsas");
    else respond("humano");
  };

  return (
    <>
      <button className={`to-top ${topVisible ? "visivel" : ""}`} aria-label="Voltar ao topo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <div className="a11y-dock">
        <button className="a11y-tab" aria-expanded={a11yOpen} onClick={() => setA11yOpen((v) => !v)}>
          <i className="fa-solid fa-universal-access"></i><span>Recursos de acessibilidade</span>
        </button>
        <button className="a11y-tab a11y-libras" onClick={() => (document.querySelector("[vw-access-button]") as HTMLElement)?.click()}>
          <i className="fa-solid fa-hands-asl-interpreting"></i><span>Acessível em Libras</span>
        </button>
      </div>
      {a11yOpen && (
        <div className="a11y-panel" role="dialog" aria-label="Acessibilidade">
          <h4><i className="fa-solid fa-universal-access"></i> Acessibilidade</h4>
          <button onClick={() => setScale((s) => Math.min(s + 0.1, 1.4))}><i className="fa-solid fa-magnifying-glass-plus"></i> Aumentar fonte</button>
          <button onClick={() => setScale((s) => Math.max(s - 0.1, 0.9))}><i className="fa-solid fa-magnifying-glass-minus"></i> Diminuir fonte</button>
          <button onClick={() => { const on = document.body.classList.toggle("alto-contraste"); localStorage.setItem("ur-contrast", on ? "1" : "0"); }}><i className="fa-solid fa-circle-half-stroke"></i> Alto contraste</button>
          <button onClick={() => { setScale(1); document.body.classList.remove("alto-contraste"); localStorage.setItem("ur-contrast", "0"); }}><i className="fa-solid fa-rotate-left"></i> Restaurar padrão</button>
        </div>
      )}

      <button className="chat-fab" aria-label="Assistente virtual" onClick={openChat} style={{ display: chatOpen ? "none" : "flex" }}>
        <i className="fa-solid fa-headset"></i><span className="chat-fab-dot"></span>
      </button>
      {chatOpen && (
        <div className="chat-box" role="dialog" aria-label="Assistente virtual">
          <div className="chat-header">
            <div className="chat-avatar"><i className="fa-solid fa-robot"></i></div>
            <div className="chat-id"><strong>Léo · Assistente virtual</strong><span><i className="fa-solid fa-circle"></i> Online agora</span></div>
            <button className="chat-close" aria-label="Fechar" onClick={() => setChatOpen(false)}><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.tipo}`}>
                {m.txt}
                {m.acao && (m.acao.wpp ? (
                  <><br /><a className="chat-action wpp" href="https://wa.me/5555981292693" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i> {m.acao.label}</a></>
                ) : (
                  <><br /><button className="chat-action" onClick={() => { setChatOpen(false); navigate(m.acao!.nav!); }}>{m.acao.label} →</button></>
                ))}
              </div>
            ))}
          </div>
          <div className="chat-quick">
            {CHAT_QUICK.map((q) => <button key={q.id} className="chat-chip" onClick={() => quick(q)}>{q.label}</button>)}
          </div>
          <form className="chat-input" onSubmit={send}>
            <input type="text" placeholder="Digite sua mensagem..." aria-label="Sua mensagem" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit" aria-label="Enviar"><i className="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      )}
    </>
  );
}

/* ============================================================
   APP
   ============================================================ */
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  return null;
}

function Translator({ lang }: { lang: "pt" | "en" }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const id = requestAnimationFrame(() => applyLang(lang));
    return () => cancelAnimationFrame(id);
  }, [lang, pathname]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState<"pt" | "en">(() => ((localStorage.getItem("ur-lang") as "pt" | "en") || "pt"));
  const onToggleLang = () => setLang((l) => { const n = l === "pt" ? "en" : "pt"; localStorage.setItem("ur-lang", n); return n; });
  return (
    <BrowserRouter>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Navbar lang={lang} onToggleLang={onToggleLang} />
      <ScrollTop />
      <Translator lang={lang} />
      <main id="conteudo" key={lang}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/vestibular" element={<Vestibular />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          <Route path="/cadastro-professor" element={<CadastroProfessor />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWidgets />
    </BrowserRouter>
  );
}
