import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; txt: string } | null>(null);

  const entrar = () => {
    if (!user.trim() || !pass.trim()) {
      setMsg({ ok: false, txt: "Preencha usuário e senha para continuar." });
    } else {
      setMsg({ ok: true, txt: "Acesso validado! Esta é uma demonstração visual — o portal não possui back-end." });
    }
  };

  return (
    <section className="page login-page active">
      <div className="login-bg"></div>
      <div className="login-card">
        <div className="login-side">
          <img src="/assets/logo-universidade.png" alt="Universidade React" className="login-logo" />
          <h2>Portal do Aluno</h2>
          <p>Acompanhe suas notas, matrícula, financeiro e biblioteca — tudo em um só lugar, a qualquer hora.</p>
          <ul className="login-feats">
            <li><i className="fa-solid fa-chart-simple"></i> Notas e frequência</li>
            <li><i className="fa-solid fa-file-invoice-dollar"></i> Financeiro e matrícula</li>
            <li><i className="fa-solid fa-book"></i> Biblioteca e materiais</li>
            <li><i className="fa-solid fa-calendar-check"></i> Calendário acadêmico</li>
          </ul>
        </div>
        <form className="login-form" onSubmit={(e) => { e.preventDefault(); entrar(); }}>
          <h1>Entrar</h1>
          <p className="login-sub">Use seu CPF ou usuário institucional.</p>
          <div className="login-field">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder="CPF ou usuário" autoComplete="username" value={user} onChange={(e) => setUser(e.target.value)} />
          </div>
          <div className="login-field">
            <i className="fa-solid fa-lock"></i>
            <input type={show ? "text" : "password"} placeholder="Senha" autoComplete="current-password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button type="button" className="toggle-pass" aria-label={show ? "Ocultar senha" : "Mostrar senha"} onClick={() => setShow((s) => !s)}>
              <i className={show ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}></i>
            </button>
          </div>
          <button type="button" className="login-forgot" onClick={() => navigate("/atendimento")}>Esqueceu a senha?</button>
          <button className="btn btn--primary btn--full" type="submit">Entrar →</button>
          {msg && (
            <div className={`login-msg ${msg.ok ? "ok" : "err"}`}>
              {msg.ok && <i className="fa-solid fa-circle-check"></i>} {msg.txt}
            </div>
          )}
          <div className="login-divider"><span>ou</span></div>
          <p className="login-signup">Ainda não é aluno? <button type="button" onClick={() => navigate("/cadastro-aluno")}>Faça sua inscrição</button></p>
        </form>
      </div>
    </section>
  );
}
