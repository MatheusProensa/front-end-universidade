import { JsForm } from "../App";
import "./cadastroaluno.css";

export default function CadastroAluno() {
  return (
    <section className="page active">
      <div className="page-banner" style={{ backgroundImage: "url('/assets/bg-aluno.png')" }}>
        <div className="container"><h1>Cadastro de Aluno</h1><div className="banner-text"><p>Inicie sua jornada acadêmica e faça parte de uma universidade conectada ao futuro.</p></div></div>
      </div>
      <div className="section"><div className="split">
        <div className="split-navy">
          <span className="split-info-tag">INSCRIÇÃO ACADÊMICA</span>
          <h2 style={{ marginTop: 8 }}>Seu futuro começa aqui</h2>
          <p>Preencha seus dados para realizar seu cadastro e dar o primeiro passo para sua formação universitária.</p>
          <div className="cad-beneficios">
            <div><i className="fa-solid fa-book-open"></i><strong>25+ Cursos</strong><p>Graduação moderna e conectada ao mercado</p></div>
            <div><i className="fa-solid fa-user-graduate"></i><strong>15 mil alunos</strong><p>Comunidade acadêmica em crescimento</p></div>
          </div>
        </div>
        <JsForm okTitle="Cadastro realizado!" okMsg="Seja bem-vindo(a)! Em breve nossa equipe entrará em contato com os próximos passos da sua matrícula." submitLabel="Realizar cadastro →"
          heading={<><h3>Preencha seus dados</h3><div className="line"></div></>}>
          <div className="form-group"><label>Nome completo</label><input className="input" type="text" placeholder="Digite seu nome" /></div>
          <div className="form-group"><label>CPF</label><input className="input" type="text" placeholder="Digite seu CPF" /></div>
          <div className="form-group"><label>E-mail</label><input className="input" type="email" placeholder="Digite seu e-mail" /></div>
          <div className="form-group"><label>Curso desejado</label><select className="input" defaultValue="Sistemas de Informação"><option>Sistemas de Informação</option><option>Administração</option><option>Direito</option><option>Enfermagem</option><option>Design Gráfico</option><option>Educação Física</option><option>Biomedicina</option><option>Medicina Veterinária</option></select></div>
        </JsForm>
      </div></div>
    </section>
  );
}
