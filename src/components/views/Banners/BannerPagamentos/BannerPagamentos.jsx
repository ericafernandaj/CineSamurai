import { StylePagamentos } from "./BannerPagamentos.style";
import Input from "../../Input/Input";
import Button from "../../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const BannerPagamentos = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Poltronas");
  };
  return (
    <StylePagamentos>
      <div>
        <section className="ParagrafoUm">
          <h1>Pagamento</h1>
          <p>
            Para finalizar, você deve confirmar seus dados de compra e informar
            os dados de seu cartão. Após este passo, sua compra não poderá ser
            mais alterada.
          </p>
        </section>

        <section className="ParagrafoDois">
          <div className="ImagensCartoes">
            <h2>Cartão de Crédito</h2>
            <img
              className="imgCartaoMaster"
              src="../../../public/mastercard.png"
              alt=""
            ></img>
            <img
              className="imgCartaoMaster"
              src="../../../public/visa.png"
              alt=""
            ></img>
            <img
              className="imgCartaoMaster"
              src="../../../public/hipercard.png"
              alt=""
            ></img>
            <img
              className="imgCartaoMaster"
              src="../../../public/elo.png"
              alt=""
            ></img>
            <img
              className="imgCartaoMaster"
              src="../../../public/DinersClub.png"
              alt=""
              ></img>
          </div>
        </section>
        <section className="Paragrafotres">

          <label htmlFor="numeroCartao">Número do Cartão</label>
          <input
            type="text"
            id="numeroCartao"
            placeholder="1234 5678 9123 4567"
          />

          <label htmlFor="validade">Validade</label>
          <input type="text" id="validade" placeholder="01/23" />

          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="123" />

          <label htmlFor="nome">Nome do titular do cartão</label>
          <input type="text" id="nome" placeholder="Nome" />
        </section>

        <section className="Paragrafoquatro">
          <h2 className="pix">Pix</h2>
          <img className="imgPix" src="../../../public/pix.png" alt=""></img>
          <p>
            Pague Com o Pix! Está forma de pagamento veio para simplificar, você
            pode pagar esta compra escaneando o QR Code ou copiando a chave que
            será gerada.
          </p>

          <Button className= "botaoPg" texto="Continue" variant="primary" onClick={handleClick} />
        </section>
      </div>
    </StylePagamentos>
  );
};

export default BannerPagamentos;
