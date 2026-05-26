import "./cadastroprofessor.css";
import bgProfessor from "../assets/bg-professor.png";

import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUsers,
  FaAward
} from "react-icons/fa";

export default function CadastroProfessor() {
  return (
    <div className="cadastro-professor-page">
      <section
        className="professor-hero"
        style={{ backgroundImage: `url(${bgProfessor})` }}
      >
        <div className="professor-hero-content">
          <h1>Cadastro de Professor</h1>

          <div className="professor-hero-text">
            <p>
              Faça parte do nosso corpo docente e contribua<br />
              para a formação de grandes profissionais.
            </p>
          </div>
        </div>
      </section>

      <section className="professor-container">
        <div className="professor-info">
          <span>INSCRIÇÃO DOCENTE</span>

          <h2>Educar é transformar futuros</h2>

          <div className="professor-line"></div>

          <p>
            Preencha seus dados para integrar nosso corpo docente e inspirar
            novas gerações através do conhecimento.
          </p>

          <div className="professor-beneficios">
            <div>
              <FaChalkboardTeacher />
              <strong>Ensino moderno</strong>
              <p>Metodologias ativas e ambiente acadêmico inovador</p>
            </div>

            <div>
              <FaUsers />
              <strong>Comunidade docente</strong>
              <p>Equipe colaborativa e conectada ao mercado</p>
            </div>

            <div>
              <FaBookOpen />
              <strong>Pesquisa e extensão</strong>
              <p>Incentivo ao desenvolvimento acadêmico contínuo</p>
            </div>

            <div>
              <FaAward />
              <strong>Valorização profissional</strong>
              <p>Reconhecimento, crescimento e troca de experiências</p>
            </div>
          </div>
        </div>

        <form className="professor-form">
          <h3>Preencha seus dados</h3>

          <div className="form-group">
            <label>Nome completo</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>

          <div className="form-group">
            <label>CPF</label>
            <input type="text" placeholder="Digite seu CPF" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </div>

          <div className="form-group">
            <label>Titulação</label>
            <select>
              <option>Selecione sua titulação</option>
              <option>Especialização</option>
              <option>Mestrado</option>
              <option>Doutorado</option>
              <option>Pós-doutorado</option>
            </select>
          </div>

          <div className="form-group">
            <label>Área de atuação</label>
            <input type="text" placeholder="Digite sua área de atuação" />
          </div>

          <button type="submit">Realizar cadastro →</button>
        </form>
      </section>
    </div>
  );
}