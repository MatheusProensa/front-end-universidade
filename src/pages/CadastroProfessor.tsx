import { JsForm } from "../App";
import "./cadastroprofessor.css";

export default function CadastroProfessor() {
  return (
    <section className="page active">
      <div className="page-banner" style={{ backgroundImage: "url('/assets/bg-professor.png')" }}>
        <div className="container"><h1>Cadastro de Professor</h1><div className="banner-text"><p>Faça parte do nosso corpo docente e contribua para a formação de grandes profissionais.</p></div></div>
      </div>
      <div className="section"><div className="split">
        <div className="split-navy">
          <span className="split-info-tag">INSCRIÇÃO DOCENTE</span>
          <h2 style={{ marginTop: 8 }}>Educar é transformar futuros</h2>
          <p>Preencha seus dados para integrar nosso corpo docente e inspirar novas gerações através do conhecimento.</p>
          <div className="cad-beneficios">
            <div><i className="fa-solid fa-chalkboard-user"></i><strong>Ensino moderno</strong><p>Metodologias ativas e ambiente acadêmico inovador</p></div>
            <div><i className="fa-solid fa-users"></i><strong>Comunidade docente</strong><p>Equipe colaborativa e conectada ao mercado</p></div>
            <div><i className="fa-solid fa-book-open"></i><strong>Pesquisa e extensão</strong><p>Incentivo ao desenvolvimento acadêmico contínuo</p></div>
            <div><i className="fa-solid fa-award"></i><strong>Reconhecimento</strong><p>Valorização da carreira e do mérito docente</p></div>
          </div>
        </div>
        <JsForm okTitle="Cadastro realizado!" okMsg="Obrigado pelo interesse em integrar nosso corpo docente. Nossa equipe entrará em contato em breve." submitLabel="Realizar cadastro →"
          heading={<><h3>Preencha seus dados</h3><div className="line"></div></>}>
          <div className="form-group"><label>Nome completo</label><input className="input" type="text" placeholder="Digite seu nome" /></div>
          <div className="form-group"><label>CPF</label><input className="input" type="text" placeholder="Digite seu CPF" /></div>
          <div className="form-group"><label>E-mail</label><input className="input" type="email" placeholder="Digite seu e-mail" /></div>
          <div className="form-group"><label>Área de atuação</label><select className="input" defaultValue="Tecnologia"><option>Tecnologia</option><option>Negócios</option><option>Ciências Sociais</option><option>Saúde</option><option>Comunicação</option><option>Biológicas</option></select></div>
        </JsForm>
      </div></div>
    </section>
  );
}
