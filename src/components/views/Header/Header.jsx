import MinhaImagem from '../../../../public/figuracinesamurai.png'
import {StyleHeader} from './Header.Style'
import { Link } from 'react-router-dom'

const Header = () => {
   

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
          <Link to='/Precos'className={"link"}>Preços</Link>
          </li> 
          <li>
          <Link to='/Login'className={"link"}>Login</Link>
          </li> 
          </ul>
          </nav>
    </StyleHeader>
  )
};

export default Header;