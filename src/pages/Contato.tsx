import { useState } from "react";
import { JsForm } from "../App";
import "./contato.css";

const SETORES = [
  { icon: "fa-file-signature", t: "Secretaria Acadêmica", p: "Matrículas, documentos, históricos e declarações.", h: "Seg a sex, 8h às 20h", tel: "(55) 3220-1200", mail: "secretaria@universidadereact.com" },
  { icon: "fa-file-invoice-dollar", t: "Financeiro / Tesouraria", p: "Boletos, mensalidades, negociações e bolsas.", h: "Seg a sex, 8h às 18h", tel: "(55) 3220-1210", mail: "financeiro@universidadereact.com" },
  { icon: "fa-book", t: "Biblioteca", p: "Empréstimos, renovações, acervo e espaços de estudo.", h: "Seg a sex, 8h às 22h · Sáb, 8h às 12h", tel: "(55) 3220-1220", mail: "biblioteca@universidadereact.com" },
  { icon: "fa-chalkboard-user", t: "Coordenações de Curso", p: "Orientação acadêmica, disciplinas e assuntos do curso.", h: "Seg a sex, 9h às 18h", tel: "(55) 3220-1230", mail: "coordenacao@universidadereact.com" },
];
const FAQ = [
  { q: "Como faço para me inscrever em um curso?", a: <p>Basta acessar o menu <strong>Inscreva-se</strong> no topo, escolher entre Aluno ou Professor e preencher o formulário. Nossa equipe entra em contato para os próximos passos.</p> },
  { q: "Os cursos são presenciais ou a distância?", a: <p>Atualmente todos os cursos de graduação são <strong>presenciais</strong>, distribuídos em diferentes turnos. Consulte cada curso na página de Cursos para ver o turno disponível.</p> },
  { q: "Existe processo seletivo ou vestibular?", a: <p>Sim. Após o cadastro, você recebe as informações sobre o processo seletivo, datas e documentação necessária por e-mail.</p> },
  { q: "Qual o horário de atendimento?", a: <p>Nosso atendimento funciona de <strong>segunda a sexta, das 8h às 18h</strong>, de forma presencial e online. Pelo WhatsApp você fala com a equipe a qualquer momento.</p> },
];

export default function Contato() {
  const [faq, setFaq] = useState<number | null>(null);
  return (
    <section className="page active">
      <div className="page-banner" style={{ backgroundImage: "url('/assets/bg-contato.png')" }}>
        <div className="container"><h1>Atendimento</h1><div className="banner-text"><p>Fale com o setor certo. Confira horários, telefones e canais de cada área da universidade.</p></div></div>
      </div>

      <div className="section">
        <div className="horario-geral">
          <div className="hg-item"><i className="fa-regular fa-clock"></i><div><strong>Segunda a sexta</strong><span>8h às 22h</span></div></div>
          <div className="hg-item"><i className="fa-regular fa-clock"></i><div><strong>Sábado</strong><span>8h às 12h</span></div></div>
          <div className="hg-item"><i className="fa-solid fa-headset"></i><div><strong>Central de atendimento</strong><span>(55) 3220-1200</span></div></div>
          <div className="hg-item"><i className="fa-brands fa-whatsapp"></i><div><strong>WhatsApp geral</strong><span>(55) 98129-2693</span></div></div>
        </div>

        <header className="home-head" style={{ marginTop: 48 }}><span className="eyebrow">Setores</span><h2 className="sec-title">Canais por área</h2><span className="accent"></span></header>
        <div className="atend-grid">
          {SETORES.map((s) => (
            <article key={s.t} className="atend-card">
              <div className="atend-head"><div className="atend-icon"><i className={`fa-solid ${s.icon}`}></i></div><div><h3>{s.t}</h3><p>{s.p}</p></div></div>
              <ul className="atend-info">
                <li><i className="fa-regular fa-clock"></i> {s.h}</li>
                <li><i className="fa-solid fa-phone"></i> {s.tel}</li>
                <li><i className="fa-solid fa-envelope"></i> {s.mail}</li>
              </ul>
              <a className="atend-wpp" href="https://wa.me/5555981292693" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i> Falar no WhatsApp</a>
            </article>
          ))}
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <header className="home-head"><span className="eyebrow">Como chegar</span><h2 className="sec-title">Onde estamos</h2><span className="accent"></span></header>
        <div className="mapa-split">
          <div className="mapa-info">
            <div className="mapa-row"><i className="fa-solid fa-location-dot"></i><div><strong>Endereço</strong><span>Rua Inspiração, 123 — Centro<br />Santa Maria, RS · 97050-000</span></div></div>
            <div className="mapa-row"><i className="fa-solid fa-car"></i><div><strong>De carro</strong><span>Estacionamento próprio gratuito no campus.</span></div></div>
            <div className="mapa-row"><i className="fa-solid fa-bus"></i><div><strong>Transporte público</strong><span>Linhas 12, 21 e 34 param em frente à universidade.</span></div></div>
            <a className="btn btn--primary" href="https://www.google.com/maps/search/?api=1&query=Santa+Maria+RS" target="_blank" rel="noreferrer">Abrir no Google Maps →</a>
          </div>
          <div className="mapa-frame">
            <iframe title="Mapa da Universidade React" src="https://www.google.com/maps?q=Santa%20Maria%20RS&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="split">
          <div className="split-navy">
            <span className="split-info-tag">FALE CONOSCO</span>
            <h2 style={{ marginTop: 8 }}>Envie uma mensagem</h2>
            <p>Não encontrou o que precisava? Escreva pra gente e nossa equipe responde o mais rápido possível.</p>
            <div className="cad-beneficios">
              <div><i className="fa-solid fa-envelope"></i><strong>E-mail</strong><p>contato@universidadereact.com</p></div>
              <div><i className="fa-brands fa-whatsapp"></i><strong>WhatsApp</strong><p>(55) 98129-2693</p></div>
            </div>
          </div>
          <JsForm okTitle="Mensagem enviada!" okMsg="Recebemos sua mensagem e nossa equipe responderá o mais rápido possível." submitLabel="Enviar mensagem →"
            heading={<><h2>Envie sua mensagem</h2><div className="line"></div></>}>
            <div className="form-row">
              <div className="form-group"><label>Nome</label><input className="input" type="text" placeholder="Digite seu nome" /></div>
              <div className="form-group"><label>E-mail</label><input className="input" type="email" placeholder="Digite seu e-mail" /></div>
            </div>
            <div className="form-group"><label>Assunto</label><input className="input" type="text" placeholder="Digite o assunto" /></div>
            <div className="form-group form-grow"><label>Mensagem</label><textarea className="input" placeholder="Digite sua mensagem"></textarea></div>
          </JsForm>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <header className="home-head"><span className="eyebrow">Dúvidas frequentes</span><h2 className="sec-title">Perguntas frequentes</h2><span className="accent"></span></header>
        <div className="faq">
          {FAQ.map((f, i) => (
            <div key={i} className={`faq-item ${faq === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setFaq(faq === i ? null : i)}>{f.q} <i className="fa-solid fa-chevron-down"></i></button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
