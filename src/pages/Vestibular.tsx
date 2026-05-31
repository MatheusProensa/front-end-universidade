import { useNavigate } from "react-router-dom";
import "./vestibular.css";

const INGRESSO = [
  { icon: "fa-pen-to-square", t: "Vestibular tradicional", p: "Prova on-line de redação e conhecimentos gerais, feita de onde você estiver." },
  { icon: "fa-award", t: "Nota do ENEM", p: "Use a nota de edições recentes do ENEM e ingresse sem fazer prova." },
  { icon: "fa-right-left", t: "Transferência", p: "Venha de outra instituição aproveitando as disciplinas já cursadas." },
  { icon: "fa-user-graduate", t: "Segunda graduação", p: "Já tem diploma? Ingresse em um novo curso de forma simplificada." },
];
const PASSOS = [
  { n: "1", t: "Inscrição", p: "Preencha o formulário on-line e escolha seu curso e forma de ingresso." },
  { n: "2", t: "Avaliação", p: "Faça a prova on-line ou envie sua nota do ENEM/documentos." },
  { n: "3", t: "Resultado", p: "Acompanhe o resultado por e-mail em poucos dias." },
  { n: "4", t: "Matrícula", p: "Envie a documentação, escolha o plano e garanta sua vaga." },
];
const BOLSAS = [
  { tag: "Até 100%", t: "ProUni", p: "Bolsas integrais e parciais do programa do Governo Federal para quem se enquadra nos critérios." },
  { tag: "Financiamento", t: "FIES", p: "Financie sua graduação e comece a pagar só depois de formado, com juros reduzidos." },
  { tag: "Até 40%", t: "Bolsa Mérito", p: "Desconto por desempenho acadêmico e boas notas no processo seletivo." },
  { tag: "Convênios", t: "Bolsa Empresa", p: "Descontos especiais para colaboradores de empresas parceiras e familiares de alunos." },
];
const CAL = [
  { d: "15", m: "MAR", t: "Abertura das inscrições", p: "Inscrições on-line abertas para todos os cursos." },
  { d: "05", m: "ABR", t: "Prova on-line", p: "Aplicação da prova do vestibular tradicional." },
  { d: "12", m: "ABR", t: "Resultado", p: "Divulgação dos aprovados por e-mail e no Portal." },
  { d: "22", m: "ABR", t: "Matrículas", p: "Período de matrícula e envio de documentos." },
  { d: "04", m: "AGO", t: "Início das aulas", p: "Começo do semestre letivo 2026/1." },
];

export default function Vestibular() {
  const navigate = useNavigate();
  return (
    <section className="page active">
      <div className="page-banner" style={{ backgroundImage: "url('/assets/bg-aluno.png')" }}>
        <div className="container"><h1>Vestibular &amp; Ingresso</h1><div className="banner-text"><p>Escolha a forma de ingresso ideal, conheça o processo seletivo e garanta sua vaga na Universidade React.</p></div></div>
      </div>

      <div className="section">
        <header className="home-head"><span className="eyebrow">Formas de ingresso</span><h2 className="sec-title">Várias formas de entrar</h2><span className="accent"></span></header>
        <div className="ingresso-grid">{INGRESSO.map((i) => <div key={i.t} className="ingresso-card"><div className="ingresso-icon"><i className={`fa-solid ${i.icon}`}></i></div><h3>{i.t}</h3><p>{i.p}</p></div>)}</div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <header className="home-head"><span className="eyebrow">Passo a passo</span><h2 className="sec-title">Como funciona o processo seletivo</h2><span className="accent"></span></header>
        <div className="passos">{PASSOS.map((p) => <div key={p.n} className="passo"><span className="passo-num">{p.n}</span><h4>{p.t}</h4><p>{p.p}</p></div>)}</div>
      </div>

      <div className="bolsas-wrap"><div className="section">
        <header className="home-head"><span className="eyebrow">Bolsas e financiamento</span><h2 className="sec-title">Estudar cabe no seu bolso</h2><span className="accent"></span></header>
        <div className="bolsas-grid">{BOLSAS.map((b) => <div key={b.t} className="bolsa-card"><div className="bolsa-tag">{b.tag}</div><h3>{b.t}</h3><p>{b.p}</p></div>)}</div>
      </div></div>

      <div className="section">
        <header className="home-head"><span className="eyebrow">Calendário</span><h2 className="sec-title">Datas do vestibular 2026/1</h2><span className="accent"></span></header>
        <div className="calendario">{CAL.map((c) => <div key={c.t} className="cal-item"><div className="cal-data"><strong>{c.d}</strong><span>{c.m}</span></div><div className="cal-txt"><h4>{c.t}</h4><p>{c.p}</p></div></div>)}</div>
      </div>

      <div className="cta-band"><div className="cta-inner">
        <div><h2>Sua vaga está esperando por você</h2><p>Inscreva-se no vestibular 2026/1 e dê o primeiro passo na sua graduação.</p></div>
        <div className="cta-actions">
          <button className="btn btn--yellow" onClick={() => navigate("/cadastro-aluno")}>Inscrever-se agora →</button>
          <button className="btn btn--outline" onClick={() => navigate("/atendimento")}>Tirar dúvidas →</button>
        </div>
      </div></div>
    </section>
  );
}
