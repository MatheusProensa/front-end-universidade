import "./sobre.css";
import bgSobre from "../assets/bg-sobre.png";
import { useEffect, useState } from "react";
import { Target, Eye, Gem } from "lucide-react";
import alunosImg from "../assets/alunos.png";
import { Link } from "react-router-dom";

function Contador({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    let inicio = 0;
    const duracao = 1500;
    const intervalo = 20;
    const incremento = end / (duracao / intervalo);

    const timer = setInterval(() => {
      inicio += incremento;

      if (inicio >= end) {
        setValor(end);
        clearInterval(timer);
      } else {
        setValor(Math.floor(inicio));
      }
    }, intervalo);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {valor.toLocaleString("pt-BR")}
      {suffix}
    </>
  );
}

export default function Sobre() {
  return (
    <div className="sobre-page">
      <section
        className="sobre-hero"
        style={{ backgroundImage: `url(${bgSobre})` }}
      >
        <div className="sobre-hero-content">
          <h1>Sobre a Universidade</h1>

          <div className="sobre-hero-text">
            <p>
              Conheça nossa história, missão, valores e o compromisso<br />
              com uma educação moderna e conectada ao futuro.
            </p>
          </div>
        </div>
      </section>

      <section className="diferenciais-section">

  <div className="diferenciais-left">

    <span className="diferenciais-tag">
      DIFERENCIAIS
    </span>

    <h2>
      Muito além da sala de aula
    </h2>

    <div className="diferenciais-grid">

      <div className="diferencial-item">
        <h4>Tecnologia e inovação</h4>

        <p>
          Laboratórios modernos e recursos tecnológicos
          que impulsionam o aprendizado.
        </p>
      </div>

      <div className="diferencial-item">
        <h4>Conexão com o mercado</h4>

        <p>
          Parcerias com empresas e projetos práticos
          que aproximam você da profissão.
        </p>
      </div>

      <div className="diferencial-item">
        <h4>Internacionalização</h4>

        <p>
          Programas de intercâmbio e experiências
          acadêmicas globais.
        </p>
      </div>

      <div className="diferencial-item">
        <h4>Atenção ao aluno</h4>

        <p>
          Acompanhamento personalizado para apoiar
          sua jornada acadêmica.
        </p>
      </div>

    </div>

  </div>

  <div className="diferenciais-right">

    <img
  src={alunosImg}
  alt="Alunos"
/>

  </div>

</section>

      <section className="mvv-section">
        <div className="mvv-card">
          <div className="mvv-top">
            <div className="mvv-icon">
              <Target size={18} strokeWidth={2.2} />
            </div>
            <h3>Missão</h3>
          </div>

          <div className="mvv-line"></div>

          <p>
            Formar profissionais competentes, éticos e inovadores,
            contribuindo para o desenvolvimento da sociedade por meio
            do ensino, pesquisa e extensão.
          </p>
        </div>

        <div className="mvv-card">
          <div className="mvv-top">
            <div className="mvv-icon">
              <Eye size={18} strokeWidth={2.2} />
            </div>
            <h3>Visão</h3>
          </div>

          <div className="mvv-line"></div>

          <p>
            Ser referência em educação superior, reconhecida pela qualidade de
            ensino, inovação e impacto positivo na sociedade.
          </p>
        </div>

        <div className="mvv-card">
          <div className="mvv-top">
            <div className="mvv-icon">
              <Gem size={18} strokeWidth={2.2} />
            </div>
            <h3>Valores</h3>
          </div>

          <div className="mvv-line"></div>

          <p>
            Ética, inovação, excelência, diversidade, responsabilidade social e
            compromisso com o desenvolvimento humano.
          </p>
        </div>
      </section>

      <section className="numeros-section">
        <div className="numeros-left">
          <span className="numeros-tag">NÚMEROS QUE NOS ORGULHAM</span>

          <h2>Resultados que refletem nosso compromisso</h2>

          <p>
            Mais que números, são histórias de transformação, aprendizado e
            conquistas que nos motivam a evoluir cada vez mais.
          </p>

          <Link to="/cursos" className="btn-numeros">
            Ver cursos →
           </Link>
        </div>

        <div className="numeros-grid">
          <div className="numero-card">
            <strong>
              <Contador end={15000} suffix="+" />
            </strong>
            <span>Alunos formados</span>
            <p>Profissionais preparados para o mercado</p>
          </div>

          <div className="numero-card">
            <strong>
              <Contador end={25} suffix="+" />
            </strong>
            <span>Cursos de graduação</span>
            <p>Opções modernas e alinhadas às tendências</p>
          </div>

          <div className="numero-card">
            <strong>
              <Contador end={300} suffix="+" />
            </strong>
            <span>Professores</span>
            <p>Mestres e doutores com experiência acadêmica</p>
          </div>

          <div className="numero-card">
            <strong>
              <Contador end={5} />
            </strong>
            <span>Unidades</span>
            <p>Estrutura completa para ensino e desenvolvimento</p>
          </div>
        </div>
      </section>
    </div>
  );
}