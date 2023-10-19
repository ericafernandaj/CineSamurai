import { StyleCadastro } from "./BannerCadatro.style";
import Input from "../../Input/Input";
import Button from "../../../common/Button/Button";
import { useNavigate } from 'react-router-dom';

const BannerCadastro = () => {

    const navigate = useNavigate();
const handleClick = () => {
    navigate('/Login');
  };
  return (

    < StyleCadastro>
    <section>
    <h1>Cadastre-se</h1>
    </section>
    <section className="section-input">

    <section>
    <Input text ='Nome' placeholder='Nome'/>
    <Input text ='Sobrenome' placeholder='Sobrenome'/>
    <Input text ='Email' placeholder='Email'/>
    <Input text ='CPF' placeholder='CPF'/>
    <Input text ='Telefone' placeholder='Telefone'/>   
    <Input text ='Logradouro' placeholder='Logradouro'/>    
    </section> 
    <section>
    <Input text ='Numero' placeholder='Numero'/>
    <Input text ='Complemento' placeholder='Complemento'/>
    <Input text ='Cidade' placeholder='Cidade'/>
    <Input text ='UF' placeholder='UF'/>
    <Input text ='CEP' placeholder='CEP'/>    
    </section>
    </section>

    <section>  
        <Button texto ='Cadastrar' variant='primary' onClick={handleClick}/>
    </section>
    

    </ StyleCadastro>
  )
}

export default BannerCadastro