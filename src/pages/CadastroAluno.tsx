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
    </div>
  );
}