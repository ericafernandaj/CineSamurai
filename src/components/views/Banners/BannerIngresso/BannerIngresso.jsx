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
    <section className='bloco1'>
      <h1 className='cinemaTitle'>Ingresso</h1>
    </section>
    <section className='cinema-title'>
      <h2 >ESCOLHA UMA DATA PARA ASSISTIR ESTE FILME:</h2>
    </section>
    <section className='bloco2'>
    <label htmlFor='day-select' className='selectLabel'>Dia da Semana:</label>
          <select id='day-select' className='select'>
            <option>Segunda-Feira</option>
            <option>Terça-Feira</option>
            <option>Quarta-Feira</option>
            <option>Quinta-Feira</option>
            <option>Sexta-Feira</option>
            <option>Sábado</option>
            <option>Domingo</option>
          </select>
    </section>
        <section className='bloco2'>
          <label htmlFor='time-select' className='selectLabel'>Horário:</label>
          <select id='time-select' className='select'>
            <option>14:30</option>
            <option>16:30</option>
            <option>17:00</option>
          </select>
        </section>
      <section>
      <Button texto ='Cadastrar' variant='primary' onClick={handleClick}/>
      </section>
  
  </StyleIngresso>
  
  )
}

export default BannerIngresso