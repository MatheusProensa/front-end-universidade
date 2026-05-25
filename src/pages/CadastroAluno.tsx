import "./cadastroaluno.css";
import bgAluno from "../assets/bg-aluno.png";

import {
  FaUserGraduate,
  FaIdCard,
  FaEnvelope,
  FaBookOpen
} from "react-icons/fa";

export default function CadastroAluno() {
  return (
    <div className="cadastro-page">

      {/* HERO */}
      <section
        className="cadastro-hero"
        style={{ backgroundImage: `url(${bgAluno})` }}
      >
        <div className="cadastro-hero-content">

          <h1>Cadastro de Aluno</h1>

          <div className="cadastro-hero-text">
            <p>
              Inicie sua jornada acadêmica e faça parte
              de uma universidade conectada ao futuro.
            </p>
          </div>

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="cadastro-container">

        {/* ESQUERDA */}
        <div className="cadastro-info">

          <span>INSCRIÇÃO ACADÊMICA</span>

          <h2>Seu futuro começa aqui</h2>

          <p>
            Preencha seus dados para realizar seu cadastro
            e dar o primeiro passo para sua formação universitária.
          </p>

          <div className="cadastro-beneficios">

            <div>
              <FaBookOpen />
              <strong>25+ Cursos</strong>
              <p>Graduação moderna e conectada ao mercado</p>
            </div>

            <div>
              <FaUserGraduate />
              <strong>15 mil alunos</strong>
              <p>Comunidade acadêmica em crescimento</p>
            </div>

          </div>

        </div>

        {/* FORM */}
        <form className="cadastro-form">

          <h3>Preencha seus dados</h3>

          <div className="form-group">
            <label>Nome completo</label>

            <div className="input-icon">
              <FaUserGraduate />

              <input
                type="text"
                placeholder="Digite seu nome"
              />
            </div>
          </div>

          <div className="form-group">
            <label>CPF</label>

            <div className="input-icon">
              <FaIdCard />

              <input
                type="text"
                placeholder="Digite seu CPF"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>

            <div className="input-icon">
              <FaEnvelope />

              <input
                type="email"
                placeholder="Digite seu email"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Curso desejado</label>

            <select>
              <option>Sistemas de Informação</option>
              <option>Administração</option>
              <option>Direito</option>
              <option>Enfermagem</option>
              <option>Design Gráfico</option>
              <option>Educação Física</option>
              <option>Biomedicina</option>
              <option>Medicina Veterinária</option>
            </select>
          </div>

          <button type="submit">
            Realizar cadastro →
          </button>

        </form>

      </section>
    </div>
  );
}