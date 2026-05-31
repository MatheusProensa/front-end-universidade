import { useNavigate } from "react-router-dom";
import { CountUp } from "../App";
import "./sobre.css";

export default function Sobre() {
  const navigate = useNavigate();
  return (
    <section className="page active">
      <div className="page-banner" style={{ backgroundImage: "url('/assets/bg-sobre.png')" }}>
        <div className="container"><h1>Sobre a Universidade</h1><div className="banner-text"><p>Conheça nossa história, missão, valores e o compromisso com uma educação moderna e conectada ao futuro.</p></div></div>
      </div>

      <div className="section">
        <div className="diferenciais">
          <div className="diferenciais-left">
            <span className="eyebrow">Diferenciais</span>
            <h2>Muito além da sala de aula</h2>
            <div className="dif-grid">
              <div className="dif-item"><h4>Tecnologia e inovação</h4><p>Laboratórios modernos e recursos tecnológicos que impulsionam o aprendizado.</p></div>
              <div className="dif-item"><h4>Conexão com o mercado</h4><p>Parcerias com empresas e projetos práticos que aproximam você da profissão.</p></div>
              <div className="dif-item"><h4>Internacionalização</h4><p>Programas de intercâmbio e experiências acadêmicas globais.</p></div>
              <div className="dif-item"><h4>Atenção ao aluno</h4><p>Acompanhamento personalizado para apoiar sua jornada acadêmica.</p></div>
            </div>
          </div>
          <div className="diferenciais-right"><img src="/assets/alunos.png" alt="Alunos da Universidade React" /></div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="mvv">
          <div className="mvv-card"><div className="mvv-top"><div className="mvv-icon"><i className="fa-solid fa-bullseye"></i></div><h3>Missão</h3></div><div className="mvv-line"></div><p>Formar profissionais competentes, éticos e inovadores, contribuindo para o desenvolvimento da sociedade por meio do ensino, pesquisa e extensão.</p></div>
          <div className="mvv-card"><div className="mvv-top"><div className="mvv-icon"><i className="fa-solid fa-eye"></i></div><h3>Visão</h3></div><div className="mvv-line"></div><p>Ser referência em educação superior, reconhecida pela qualidade de ensino, inovação e impacto positivo na sociedade.</p></div>
          <div className="mvv-card"><div className="mvv-top"><div className="mvv-icon"><i className="fa-solid fa-gem"></i></div><h3>Valores</h3></div><div className="mvv-line"></div><p>Ética, inovação, excelência, diversidade, responsabilidade social e compromisso com o desenvolvimento humano.</p></div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="numeros">
          <div className="numeros-left">
            <span className="eyebrow">Números que nos orgulham</span>
            <h2>Resultados que refletem nosso compromisso</h2>
            <p>Mais que números, são histórias de transformação, aprendizado e conquistas que nos motivam a evoluir cada vez mais.</p>
            <button className="btn btn--primary" onClick={() => navigate("/cursos")}>Ver cursos →</button>
          </div>
          <div className="numeros-grid">
            <div className="numero-card"><strong><CountUp end={15000} suffix="+" /></strong><span className="lbl">Alunos formados</span><p>Profissionais preparados para o mercado</p></div>
            <div className="numero-card"><strong><CountUp end={25} suffix="+" /></strong><span className="lbl">Cursos de graduação</span><p>Opções modernas e alinhadas às tendências</p></div>
            <div className="numero-card"><strong><CountUp end={300} suffix="+" /></strong><span className="lbl">Professores</span><p>Mestres e doutores com experiência acadêmica</p></div>
            <div className="numero-card"><strong><CountUp end={5} /></strong><span className="lbl">Unidades</span><p>Estrutura completa para ensino e desenvolvimento</p></div>
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <header className="home-head"><span className="eyebrow">Nossa história</span><h2 className="sec-title">Uma trajetória de crescimento</h2><span className="accent"></span></header>
        <div className="timeline">
          <div className="tl-item"><div className="tl-dot"></div><div className="tl-year">2008</div><div className="tl-card"><h4>Fundação</h4><p>A Universidade React abre as portas com 3 cursos e o compromisso de unir tecnologia e educação.</p></div></div>
          <div className="tl-item"><div className="tl-dot"></div><div className="tl-year">2014</div><div className="tl-card"><h4>Expansão</h4><p>Inauguração de novos laboratórios e da segunda unidade, ampliando para 12 cursos de graduação.</p></div></div>
          <div className="tl-item"><div className="tl-dot"></div><div className="tl-year">2019</div><div className="tl-card"><h4>Internacionalização</h4><p>Início dos programas de intercâmbio com universidades parceiras na Europa e América do Norte.</p></div></div>
          <div className="tl-item"><div className="tl-dot"></div><div className="tl-year">2024</div><div className="tl-card"><h4>Referência regional</h4><p>Mais de 15 mil formados, 25+ cursos e 5 unidades — reconhecida pela excelência e conexão com o mercado.</p></div></div>
        </div>
      </div>
    </section>
  );
}
