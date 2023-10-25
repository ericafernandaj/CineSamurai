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
  const [id, setId] = useState('')

  const clearLocalStorage = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    navigate("/")
  };

  async function handleDeletarUsuario(){
    const resposta = await deleteUsuario(localStorage.getItem("token"))
    setModalDelete(false)
    if (resposta.message === "Usuário deletado do banco de dados") {
      console.log("Funcionou")
    }
    else {
      console.log(resposta.message);
    }
  }

  function handleAbrirModalDelete(id) {
    setId(id)
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