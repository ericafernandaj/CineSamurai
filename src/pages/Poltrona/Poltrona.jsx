import HeaderLogado from '../../components/views/HeaderLogado/HeaderLogado'
import Footer from "../../components/views/Footer/Footer"
import SelecionarPoltrona from "../../components/views/SelecionarPoltrona/SelecionarPoltrona"
import Button from '../../components/common/Button/Button'
import { StylePoltrona } from "./poltrona.style"
import { Link, useNavigate } from "react-router-dom";

const Poltrona = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Ingresso');
  };
  return (
    <>
      <HeaderLogado />
      <StylePoltrona>
        <SelecionarPoltrona />
        <Button
          texto="Finalizar Compra"
          width="25%"
          variant='primary'
          onClick={handleClick}
        />
      </StylePoltrona>
      <Footer />
    </>
  )
}

export default Poltrona