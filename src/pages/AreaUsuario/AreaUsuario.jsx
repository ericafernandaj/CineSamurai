import HeaderLogado from '../../components/views/HeaderLogado/HeaderLogado'
import Footer from '../../components/views/Footer/Footer'
import { StyleAreaUsuario } from './areaUsuario.style'
import Button from '../../components/common/Button/Button'
import Modal from "../../components/common/Modal/Modal"

const AreaUsuario = () => {

  const [modalAberto, setModalAberto] = useState(false)
  const [modalDeleta, setModalDeleta] = useState(true)

      return (
  <> 
    <HeaderLogado/>
    <StyleAreaUsuario>
        <Button texto='Alterar minhas informações' variant='primary' className='botao1'/>
        <Button texto='Excluir minha conta' variant='primary'/>
        <Button texto='Sair' variant='primary' />
    </StyleAreaUsuario>
    <Footer/>
  </>
   
    
   
  )
}

export default AreaUsuario;