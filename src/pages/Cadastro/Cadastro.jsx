import Header from "../../components/views/Header/Header";
import Footer from "../../components/views/Footer/Footer";
import { StyleCadastro } from "./cadastro.style";
import Textfield from "../../components/views/Textfield/Textfield";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();

    const body = {
      nome,
      email,
      cpf,
      telefone,
    };

    if (senha === confirmaSenha) {
      const resposta = await postUsuario(body, senha);
      localStorage.setItem("id", resposta.data.id);
      localStorage.setItem("nome", resposta.data.nome);
      console.log(resposta);
    } else {
      console.log("As senhas precisam ser iguais");
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
              name="Nome"
              type="text"
              placeholder="Nome"
              required
              value={nome}
              onChange={(e) => setNome(e)}
            />
            <Textfield
              label="Email:"
              name="email"
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
              name="cpf"
              type="text"
              placeholder="xxxxxxxxxxx"
              required
              value={cpf}
              onChange={(e) => setCPF(e)}
            />
            <Textfield
              label="Telefone:"
              name="telefone"
              placeholder="xxxxxxxxxxx"
              required
              value={telefone}
              onChange={(e) => setTelefone(e)}
            />
          </div>

          <div className="align-textfield">
            <Textfield
              label="Senha:"
              name="senha"
              placeholder="●●●●●●●"
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e)}
            />
            <Textfield
              label="Confirme a senha:"
              name="confirmaSenha"
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
