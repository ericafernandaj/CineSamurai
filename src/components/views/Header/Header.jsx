import React from 'react'
import MinhaImagem from '../../../../public/figuracinesamurai.png'
import {StyleHeader} from './Header.Style'
import { Link } from 'react-router-dom'

const Header = () => {
    // const navigate = useNavigate()

  return (
    <StyleHeader>
        <picture className='Logo'>
          <img src={MinhaImagem} alt="" />
        </picture>
        <nav>
        <ul className={"listaLinks"}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/Filmes'>Filmes</Link>
          </li>  
          <li>
          <Link to='/VendaOnline'>Venda Online</Link>
          </li> 
          <li>
          <Link to='/Login'>Login</Link>
          </li> 
          </ul>
          </nav>
    </StyleHeader>
  )
};

export default Header;