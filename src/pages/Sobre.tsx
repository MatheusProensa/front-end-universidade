import "./sobre.css";

export default function Sobre() {
  return (
    <div className="sobre-page">
      <section className="sobre-hero">
        <div>
          <span>Sobre a Universidade</span>
          <h1>Educação moderna para transformar futuros.</h1>
          <p>
            A Universidade React conecta ensino de qualidade, tecnologia e
            experiências práticas para preparar profissionais para o mercado.
          </p>
        </div>
      </section>

      <section className="sobre-content">
        <div className="sobre-text">
          <h2>Nossa missão</h2>
          <p>
            Formar alunos preparados para os desafios do mundo atual, unindo
            conhecimento acadêmico, inovação, ética e prática profissional.
          </p>

          <h2>Por que escolher a Universidade React?</h2>
          <p>
            Contamos com professores qualificados, estrutura moderna,
            laboratórios equipados e cursos conectados às necessidades do
            mercado.
          </p>
        </div>

        <div className="sobre-numeros">
          <div>
            <strong>15.000+</strong>
            <span>Alunos formados</span>
          </div>

          <div>
            <strong>25+</strong>
            <span>Cursos de graduação</span>
          </div>

          <div>
            <strong>300+</strong>
            <span>Professores</span>
          </div>

          <div>
            <strong>5</strong>
            <span>Unidades</span>
          </div>
        </div>
      </section>
    </div>
  );
}