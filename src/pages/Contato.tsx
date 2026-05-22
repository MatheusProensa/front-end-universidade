export default function Contato() {
  return (
    <div className="page">
      <h2>Contato</h2>
      <form className="form-container">
        <input placeholder="Nome completo" />
        <input placeholder="Email" />
        <textarea placeholder="Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}