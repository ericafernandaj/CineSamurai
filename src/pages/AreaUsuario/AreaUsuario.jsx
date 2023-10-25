import HeaderLogado from '../../components/views/HeaderLogado/HeaderLogado'
import Footer from '../../components/views/Footer/Footer'
import { StyleAreaUsuario } from './areaUsuario.style'
import Button from '../../components/common/Button/Button'
import Modal from "../../components/common/Modal/Modal"
import { deleteUsuario } from '../../service/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AreaUsuario = () => {
  const navigate = useNavigate()
  const [modalDelete, setModalDelete] = useState(false)

  const clearLocalStorage = () => {
    localStorage.clear()
    navigate("/")
  };
  
  async function handleDeletarUsuario(){
    const id = localStorage.getItem("id")
    const resposta = await deleteUsuario(id)
    setModalDelete(false)
    if (resposta.id) {
      console.log('funcionou')
      clearLocalStorage()
    }
    else {
      console.log(resposta.message);
    }
  }

  function handleAbrirModalDelete() {
    setModalDelete(true)
  }

      return (
  <> 
    <HeaderLogado/>
    <StyleAreaUsuario>
        <Button texto='Alterar minhas informações' variant='primary' className='botao1'/>
        <Button 
        texto='Excluir minha conta' 
        variant='primary'
        onClick={handleAbrirModalDelete}
        />
        <Modal open={modalDelete} title='Excluir conta' fechaModal={()=> setModalDelete(false)}> 
          <p>Você deseja realmente excluir sua conta?</p>
          <Button texto='Sim' variant='primary' onClick={handleDeletarUsuario}/>
        </Modal>
        <Button texto='Sair' variant='primary' onClick={clearLocalStorage}/>
    </StyleAreaUsuario>
    <Footer/>
  </>
   
    
   
  )
}

export default AreaUsuario;