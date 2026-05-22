export default function CadastroProfessor() {
  return (
    <div className="page">
      <h2>Cadastro de Professor</h2>
      <form className="form-container">
        <input placeholder="Nome completo" />
        <input placeholder="CPF" />
        <input placeholder="Área de atuação" />
        <input placeholder="Telefone" />
        <input placeholder="Email" />
        <button type="submit">Cadastrar Professor</button>
      </form>
    </div>
  );
}