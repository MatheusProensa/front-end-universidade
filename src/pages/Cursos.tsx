export default function Cursos() {
  const cursos = [
    { nome: "Sistemas de Informação", duracao: "4 anos" },
    { nome: "Administração", duracao: "4 anos" },
    { nome: "Direito", duracao: "5 anos" },
    { nome: "Enfermagem", duracao: "4 anos" },
  ];

  return (
    <div className="page">
      <h2>Nossos Cursos</h2>
      <div className="card-container">
        {cursos.map((c, i) => (
          <div className="card" key={i}>
            <h3>{c.nome}</h3>
            <p>Duração: {c.duracao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}