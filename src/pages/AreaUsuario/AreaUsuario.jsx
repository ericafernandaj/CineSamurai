import HeaderLogado from '../../components/views/HeaderLogado/HeaderLogado'
import Footer from '../../components/views/Footer/Footer'
import { StyleAreaUsuario } from './areaUsuario.style'
import Button from '../../components/common/Button/Button'
import Modal from "../../components/common/Modal/Modal"
import { deleteUsuario, updateUsuario, getUsuario } from '../../service/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Textfield from '../../components/views/Textfield/Textfield'

const AreaUsuario = () => {
  const navigate = useNavigate()
  const [modalDelete, setModalDelete] = useState(false)
  const [modalUpdate, setModalUpdate] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const id = localStorage.getItem("id")

  const clearLocalStorage = () => {
    localStorage.clear()
    navigate("/")
  };
  
  async function handleDeletarUsuario(){
    
    const resposta = await deleteUsuario(id)
    
    if (resposta) {
      clearLocalStorage()
      setModalDelete(false)
    }
    else {
      console.log('Erro inesperado');
    }
  }

  function handleAbrirModalDelete() {
    setModalDelete(true)
  }

  async function handleAtualizarUsuario(){
    const resposta = await updateUsuario(id, nome, email, cpf, senha, telefone)

    if (resposta) {
      setModalUpdate(false)
      console.log(resposta.message)
    }
    else {
      console.log('Erro inesperado')
    }
  }

  async function getDadosUsuario(){
    const resposta = await getUsuario(id)

    return resposta
  }
  
  function handleAbrirModalUpdate() {
    getDadosUsuario()
    setModalUpdate(true)
  }
  
  return (
    <> 
    <HeaderLogado/>
    <StyleAreaUsuario>
        <Button 
        texto='Alterar minhas informações' 
        variant='primary' 
        className='botao1'
        onClick={handleAbrirModalUpdate}
        />
        <Modal title='Editar informações' open={modalUpdate} fechaModal={() => setModalUpdate(false)}>
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
                value={cpf}
                onChange={(e) => setCpf(e)}
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
          <Button texto='Salvar alterações' variant='primary' onClick={handleAtualizarUsuario}/>
      </Modal>
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

export default AreaUsuario