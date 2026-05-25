import "./contato.css";
import bgContato from "../assets/bg-contato.png";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp
} from "react-icons/fa";

export default function Contato() {
  return (
    <div className="contato-page">
      <section
        className="contato-hero"
        style={{ backgroundImage: `url(${bgContato})` }}
      >
        <div className="contato-hero-content">
          <h1>Contato</h1>

          <div className="contato-hero-text">
            <p>
              Tire suas dúvidas, fale com nossa equipe e receba<br />
              atendimento personalizado.
            </p>
          </div>
        </div>
      </section>

      <section className="contato-container">
        <div className="contato-info">
          <h2>Nossos canais de atendimento</h2>
          <div className="contato-line"></div>

          <div className="contato-cards">
            <div className="contato-card">
              <div className="contato-icon">
                <FaEnvelope />
              </div>

              <div>
                <strong>E-mail</strong>
                <p>contato@universidadereact.com</p>
                <span>Respondemos o mais rápido possível</span>
              </div>
            </div>

            <div className="contato-card">
              <div className="contato-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <strong>Telefone</strong>
                <p>(55) 98129-2693</p>
                <span>Segunda a sexta, 8h às 18h</span>
              </div>
            </div>

            <div className="contato-card">
              <div className="contato-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <strong>Endereço</strong>
                <p>Rua Inspiração, 123</p>
                <span>Santa Maria, RS - 97050-000</span>
              </div>
            </div>

            <div className="contato-card">
              <div className="contato-icon">
                <FaClock />
              </div>

              <div>
                <strong>Atendimento</strong>
                <p>Segunda a sexta, 8h às 18h</p>
                <span>Atendimento presencial e online</span>
              </div>
            </div>
          </div>

          <div className="whatsapp-box">
            <div className="whatsapp-text">
              <FaWhatsapp />
              <div>
                <strong>Prefere falar agora?</strong>
                <p>Inicie uma conversa rápida pelo WhatsApp</p>
              </div>
            </div>

            <a
              href="https://wa.me/5555981292693"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp →
            </a>
          </div>
        </div>

        <form className="contato-form">
          <h2>Envie sua mensagem</h2>
          <div className="contato-line"></div>

          <div className="form-row">
            <div>
              <label>Nome</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>

            <div>
              <label>E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" />
            </div>
          </div>

          <label>Assunto</label>
          <input type="text" placeholder="Digite o assunto" />

          <label>Mensagem</label>
          <textarea placeholder="Digite sua mensagem"></textarea>

          <button type="submit">Enviar mensagem →</button>
        </form>
      </section>
    </div>
  );
}