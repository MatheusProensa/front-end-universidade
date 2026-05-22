<<<<<<< HEAD
import './cadastroaluno.css';
import React from "react";

export default function CadastroAluno() {
  return (
    <div className="page">
      <div className="form-container">
        <h2>Cadastro de Aluno</h2>

        <div className="form-group">
          <label>Nome:</label>
          <input type="text" placeholder="Digite seu nome" />
        </div>

        <div className="form-group">
          <label>CPF:</label>
          <input type="text" placeholder="Digite seu CPF" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Digite seu email" />
        </div>

        <div className="form-group">
          <label>Curso:</label>
          <select>
            <option>Sistemas de Informação</option>
            <option>Administração</option>
            <option>Direito</option>
            <option>Enfermagem</option>
          </select>
        </div>

        <button className="submit-btn">Cadastrar</button>
      </div>
=======
export default function CadastroAluno() {
  return (
    <div className="page">
      <h2>Cadastro de Aluno</h2>
      <form className="form-container">
        <input placeholder="Nome completo" />
        <input placeholder="CPF" />
        <input placeholder="RG" />
        <input placeholder="Telefone" />
        <input placeholder="Endereço" />
        <input placeholder="Curso" />
        <button type="submit">Cadastrar</button>
      </form>
>>>>>>> 42c063c41309b19f465c9f24364e3b3de1510d99
    </div>
  );
}