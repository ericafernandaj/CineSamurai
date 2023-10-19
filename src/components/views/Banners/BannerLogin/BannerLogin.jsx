import {StyleLogin} from './BannerLogin.style'
import Button from '../../../common/Button/Button'
import { useNavigate } from 'react-router-dom';

const BannerLogin = () => {
    const navigate = useNavigate();
const handleClick = () => {
    navigate('/Cadastro');
  };
  return (
    <StyleLogin>
        <h1>Faça seu Login</h1>
        <Button texto='Cadastre-se' variant='primary' onClick={handleClick}/>
    </StyleLogin>
)
}

export default BannerLogin