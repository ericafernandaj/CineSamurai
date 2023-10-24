import Header from "../../components/views/Header/Header";
import Footer from "../../components/views/Footer/Footer";
import { StyleCadastro } from "./cadastro.style";
import Textfield from "../../components/views/Textfield/Textfield";
import Button from "../../components/common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postUsuario } from "../../service/api";
import { cpf } from "cpf-cnpj-validator";

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [cpf_usuario, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");

  function validaNome(nome) {
    return typeof nome == "string" && nome.length > 2;
  }

  function validaEmail(email) {
    return (
      typeof email == "string" &&
      email.length > 11 &&
      email.includes("@") &&
      email.includes(".com") &&
      (email.includes("gmail") || email.includes("hotmail"))
    );
  }

  function validaCPF(cpf_usuario) {
    return cpf.isValid(cpf_usuario);
  }

  function validaTelefone(telefone) {
    let telefoneInt;
    try {
      telefoneInt = parseInt(telefone);
    } catch {
      return false;
    }
    return (
      typeof telefone == "string" &&
      telefone.length == 11 &&
      telefone == telefoneInt
    );
  }

  function validaSenha(senha, confirmaSenha){
    return senha.length > 7 && senha.length <= 12 && senha == confirmaSenha
}

  const handleCadastro = async (e) => {

    e.preventDefault();

    const body = {
      nome,
      email,
      cpf: cpf_usuario, //cpf AS cpf_usuario
      telefone,
    };

    if (validaNome && validaEmail && validaSenha && validaCPF && validaTelefone) {
      navigate("/Login")
      const resposta = await postUsuario(body, senha);
      console.log(resposta);
      localStorage.setItem("id", resposta.id_usuario); 
      
    } else {
      console.log("Verifique as informações");
    }
  };

  return (
    <div>
      <Header />
      <StyleCadastro>
        <section>
          <h1>Cadastre-se</h1>

          <form>
            <div className="align-textfield">
              <Textfield
                label="Nome:"
                name="Nome:"
                type="text"
                placeholder="Nome"
                required
                value={nome}
                onChange={(e) => setNome(e)}
              />
              <Textfield
                label="Email:"
                name="Email:"
                type="email"
                placeholder="email@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e)}
              />
            </div>

            <div className="align-textfield">
              <Textfield
                label="CPF:"
                name="CPF:"
                type="text"
                placeholder="xxxxxxxxxxx"
                required
                value={cpf_usuario}
                onChange={(e) => setCPF(e)}
              />
              <Textfield
                label="Telefone:"
                name="Telefone:"
                placeholder="xxxxxxxxxxx"
                required
                value={telefone}
                onChange={(e) => setTelefone(e)}
              />
            </div>

            <div className="align-textfield">
              <Textfield
                label="Senha:"
                name="Senha:"
                placeholder="●●●●●●●"
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e)}
              />
              <Textfield
                label="Confirme a senha:"
                name="Confirme a senha:"
                placeholder="●●●●●●●"
                type="password"
                required
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e)}
              />
            </div>
          </form>

          <div className="div-cadastro">
            <Button
              texto="Cadastrar"
              variant="primary"
              onClick={handleCadastro}
            />
            <Link to="/login" className="link-login">
              Já possuo cadastro.
            </Link>
          </div>
        </section>
      </StyleCadastro>
      <Footer />
    </div>
  );
};

export default Cadastro;
