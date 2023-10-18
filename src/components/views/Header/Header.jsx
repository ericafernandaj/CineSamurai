import MinhaImagem from '../../../../public/figuracinesamurai.png'
import {StyleHeader} from './Header.Style'
import { Link } from 'react-router-dom'

const Header = () => {
    // const navigate = useNavigate()

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
          <Link to='/VendasOnline'className={"link"}>Venda Online</Link>
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