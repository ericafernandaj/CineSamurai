import HeaderLogado from '../../components/views/HeaderLogado/HeaderLogado'
import Footer from "../../components/views/Footer/Footer"
import SelecionarPoltrona from "../../components/views/SelecionarPoltrona/SelecionarPoltrona"
import Button from '../../components/common/Button/Button'
import { StylePoltrona } from "./poltrona.style"

const Poltrona = () => {
  return (
    <>
      <HeaderLogado />
      <StylePoltrona>
        <SelecionarPoltrona />
        <Button
          texto="Comprar Ingresso"
          width="25%"
          variant='primary'
        />
      </StylePoltrona>
      <Footer />
    </>
  )
}

export default Poltrona