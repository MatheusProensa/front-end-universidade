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
    </div>
  );
}