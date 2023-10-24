import React, { useState } from "react";
import Header from "../../components/views/Header/Header";
import Footer from "../../components/views/Footer/Footer";
import { StyleLogin } from "./login.style";
import Button from "../../components/common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { loginUsuario } from "../../service/api";
import Textfield from "../../components/views/Textfield/Textfield";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState();

  async function handleLogin(e) {
    e.preventDefault();
    const resposta = await loginUsuario(email, senha);

    if (resposta.token) {
      localStorage.setItem("id", resposta.id_usuario);
      localStorage.setItem("token", resposta.token);
      navigate("/VendasOnline");
    } else {
      setError(resposta.message);
    }
    console.log(resposta);
  }

  return (
    <>
      <Header />
      <StyleLogin>
        <section>
          <div className="div-principal">
            <h1>Login</h1>
            <form>
              <Textfield
                label="Email:"
                name="email"
                type="email"
                placeholder="email@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e)}
              />

              <Textfield
                label="Senha:"
                name="senha"
                placeholder="●●●●●●●"
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e)}
              />
              {error && <p style={{ color: "#A3151A" }}>{error}</p>}
              <Button
                texto="Entrar"
                variant="primary"
                width="10"
                onClick={handleLogin}
              />
              <Link to="/cadastro" className="link-cadastro">
                Não possui cadastro?
              </Link>
            </form>
          </div>
        </section>
      </StyleLogin>
      <Footer />
    </>
  );
};

export default Login;
