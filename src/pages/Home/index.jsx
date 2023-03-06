import "./styles.css";
import logo from "../../assets/logo.png";

export function Home() {
  return (
    <div className="tela">
      <div className="menu">
        <div className="textoLogo">
          <img src={logo} className="logo" alt="Logo"></img>
          <p className="textoNome">CONVERSOR ASSINA</p>
        </div>
        <div className="botoes">
          <button className="botao">USUÁRIO</button>
          <button className="botao">HISTÓRICO</button>
        </div>
        <div className="logout">
          <p className="textoLogout">LOGOUT</p>
        </div>
      </div>
      <span>TELA HOME</span>
    </div>
  );
}
