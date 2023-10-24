import MinhaImagem from '../../../../public/figuracinesamurai.png'
import {StyleHeader} from '../Header/Header.Style'
import { Link } from 'react-router-dom'

const HeaderLogado = () => {
   

  return (
    <StyleHeader>
        <picture className='logo'>
          <img src={MinhaImagem} alt="" />
        </picture>
        <nav>
        <ul className={"listaLinks"}>
          <li>
            <Link to='/'className={"link"}>Home</Link>
          </li>
          <li>
          <Link to='/Filmes'className={"link"}>Filmes</Link>
          </li>  
          <li>
          <Link to='/AreaUsuario'className={"link"}>Minha Conta</Link>
          </li> 
          </ul>
          </nav>
    </StyleHeader>
  )
};

export default HeaderLogado;