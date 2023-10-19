import { StyleIngresso } from './BannerIngresso.style'
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button/Button';

const BannerIngresso = () => {
  const navigate = useNavigate();
const handleClick = () => {
    navigate('/Poltrona');
  };
  return (
    <StyleIngresso>
        <section>
        <section>
            <h1>Ingresso</h1>
        </section> 
        <section>
            <h2>ESCOLHA UMA DATA PARA ASSISTIR ESTE FILME:</h2>
            <Button texto='Continuar' variant='primary' onClick={handleClick}/>
          </section>   
        </section>
    </StyleIngresso>
  )
}

export default BannerIngresso