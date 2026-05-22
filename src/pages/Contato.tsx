<<<<<<< HEAD
import './contato.css';
import React from "react";

export default function Contato() {
  return (
    <div className="page">
      <div className="form-container">
        <h2>Fale Conosco</h2>

        <div className="form-group">
          <label>Nome:</label>
          <input type="text" placeholder="Digite seu nome" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Digite seu email" />
        </div>

        <div className="form-group">
          <label>Assunto:</label>
          <input type="text" placeholder="Digite o assunto" />
        </div>

        <div className="form-group">
          <label>Mensagem:</label>
          <textarea placeholder="Digite sua mensagem" rows={5}></textarea>
        </div>

        <button className="submit-btn">Enviar</button>
      </div>
=======
export default function Contato() {
  return (
    <div className="page">
      <h2>Contato</h2>
      <form className="form-container">
        <input placeholder="Nome completo" />
        <input placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99
    </div>
  );
}