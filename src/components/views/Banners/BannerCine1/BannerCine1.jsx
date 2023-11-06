import { StyleBannerCine1 } from "./BannerCine1.style";
import Button from "../../../common/Button/Button";
import ImagemFreira from "/filme1.png";
import { tema } from "../../../../style/theme";
import Filme2 from "/filme2.png";
import Filme3 from "/filmeCachorro.jpg";
import Poster from "../../Poster/Poster";
import figurapromo from "/figurapromocao.png";
import Figurameia from "/meia.svg";
import FaixaEtaria from "/faixaEtaria.svg";
import { useNavigate } from "react-router-dom";
import Modal from "../../../common/Modal/Modal";
import { useState } from "react";

const Bannercine1 = () => {
  const navigate = useNavigate();
  const [modalTaAberto, setModalTaAberto] = useState(false);

  const handleClick = () => {
    navigate("/Filmes");
  };

  return (
    <StyleBannerCine1>
      <section className="initBox">
        <div className="buttonBox">
          <h1>🍿 Cine Samurai Curitiba</h1>
          <Button
            texto="Preços"
            variant="primary"
            onClick={() => setModalTaAberto(true)}
          />
          <Modal
            title="Preços"
            open={modalTaAberto}
            fechaModal={() => setModalTaAberto(false)}
          >
            <table>
              <tbody>
                <tr className="linha1">
                  <th>Dia da semana</th>
                  <th>Inteira</th>
                  <th>Meia</th>
                </tr>
                <tr>
                  <th>Segunda-feira</th>
                  <th>R$ 12,00</th>
                  <th>R$ 6,00</th>
                </tr>
                <tr>
                  <th>Terça-feira</th>
                  <th>R$ 15,00</th>
                  <th>R$ 7,50</th>
                </tr>
                <tr>
                  <th>Quarta-feira</th>
                  <th>R$ 15,00</th>
                  <th>R$ 7,50</th>
                </tr>
                <tr>
                  <th>Quinta-feira</th>
                  <th>R$ 16,00</th>
                  <th>R$ 8,00</th>
                </tr>
                <tr>
                  <th>Sexta-feira</th>
                  <th>R$ 26,00</th>
                  <th>R$ 13,00</th>
                </tr>
                <tr>
                  <th>Sábado</th>
                  <th>R$ 26,00</th>
                  <th>R$ 13,00</th>
                </tr>
                <tr>
                  <th>Domingo</th>
                  <th>R$ 26,00</th>
                  <th>R$ 13,00</th>
                </tr>
              </tbody>
            </table>
          </Modal>
          <Button texto="Programação" variant="primary" onClick={handleClick} />
        </div>
        <div className="subtitulo">
          <h2>🎬Em Breve!</h2>
        </div>
      </section>


      <section className="posterBox">
        <Poster
          imagem={ImagemFreira}
          color={tema.white50}
          titulo="A Freira 2"
          sinopse={`
                A Freira 2 é o segundo capítulo da história de A Freira (2018), 
                que faz parte do universo da franquia Invocação do Mal. No primeiro filme, 
                após uma freira cometer suicídio em um convento na Romênia, 
                o Vaticano envia o atormentado Padre Burke (Demián Bichir) e uma noviça,
                Irmã Irene (Taissa Farmiga), para investigar o ocorrido. 
                Arriscando suas vidas, a fé e até suas almas, 
                os dois descobrem um segredo profano no local, 
                confrontando uma força do mal que assume a forma de uma freira demoníaca e transforma o convento em um campo de batalha espiritual. 
                Agora, na continuação, anos após os acontecimentos do primeiro filme, um padre é assassinado e parece que o mal está se espalhando por toda a região. 
                Novamente acompanhamos a Irmã Irene quando, após pensar ter escapado por pouco de Valak, a entidade demoníaca, ela é forçada a enfrentar o poderoso e macabro inimigo mais uma vez.
                `}
          faixa={FaixaEtaria}
        />
        <Poster
          imagem={Filme2}
          color={tema.white50}
          titulo="O Exorcista"
          sinopse={`
                O Exorcista - O Devoto é a sequência do clássico de 1973 sobre uma menina de 12 anos que é possuída por uma misteriosa entidade demoníaca, 
                forçando sua mãe a buscar a ajuda de dois padres para salvá-la. Nesta versão de 2023,
                desde a morte de sua esposa grávida em um terremoto no Haiti, 
                há 12 anos, Victor Fielding tem criado sua filha Angela sozinho. 
                Mas quando Angela e sua amiga Katherine desaparecem na floresta e retornam três dias depois sem memória do que aconteceu com elas, 
                isso desencadeia uma série de eventos que obrigará Victor a confrontar o mal e, 
                em seu terror e desespero, buscar a única pessoa viva que testemunhou algo parecido antes: Chris MacNeil. Baseado no best-seller de William Peter Blatty.`}
          faixa={FaixaEtaria}
        />
        <Poster
          imagem={Filme3}
          color={tema.white50}
          titulo="Ruim Pra Cachorro"
          sinopse={`Ruim pra Cachorro é um filme norte-americano de comédia dirigido por Josh Greenbaum que acompanha a história de Reggie (Will Ferrell),
                 um inocente e adorável cachorro abandonado nas ruas por Doug (Will Forte), 
                 seu antigo dono. Em sua nova e triste vida, os caminhos do animal e de uma gangue de vira-latas liderada por um Boston Terrier acabam se cruzando,
                  e o grupo começa uma improvável amizade. Na verdade, ainda vão mais além: os cães se unem para levar Reggie de volta pra casa para fazer Doug pagar pelo que fez. Com Sofía Vergara, 
                  Jamie Foxx, Isla Fisher e Josh Gad.`}
          faixa={FaixaEtaria}
        />
      </section>
      <section className="cardPromocao">
        <picture>
          <img className="pipocaMeia" src={figurapromo} alt="" />
        </picture>

        <div>
          <div className="primeiroBloco">
            <h2 className="tituloBloco">Quem Paga</h2>
            <picture>
              <img className="meia" src={Figurameia} alt="" />
            </picture>
            <h2>?</h2>
          </div>
          <div className="segundoBloco">
            <ul>
              <li>👨🏻‍🎓 Estudantes</li>
              <li>👵🏻 Idosos</li>
              <li>👩🏻‍🏫 Professores</li>
              <li>👨🏻‍🦽 Portadores de deficiência</li>
              <li>🩸 Doador de sangue</li>
            </ul>
          </div>
        </div>

      </section>
    </StyleBannerCine1>
  );
};

export default Bannercine1;
