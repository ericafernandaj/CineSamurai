import Header from "../../components/views/Header/Header";
import Footer from "../../components/views/Footer/Footer";
import { StyleLogin } from "./login.style";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/VendasOnline');}
  return (
    <StyleLogin>
      <Header />
      <section>
        <div className="div-principal">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="E-mail"/>
          <input type="password" placeholder="Senha" />
          <Button texto="Entrar" variant="primary" width="10" onClick={handleClick}/>
          <Link to="/cadastro" className="link-cadastro">
              Não sou cadastrado
            </Link>
        </form>
      </div>
      </section>
      
      
      <Footer/>
    </StyleLogin>
  );
};

export default Login;
