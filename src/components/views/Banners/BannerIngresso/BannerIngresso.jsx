import { useState } from 'react';
import { StyleIngresso } from './BannerIngresso.style';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button/Button';

const BannerIngresso = () => {
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-Feira');
  const [quantidadeMeia, setQuantidadeMeia] = useState(0);
  const [quantidadeInteira, setQuantidadeInteira] = useState(0);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [horarioSelecionado, setHorarioSelecionado] = useState('14:30');
  const navigate = useNavigate();

  const precosIngressos = {
    'Segunda-Feira': {
      inteira: 12,
      meia: 6,
    },
    'Terça-Feira': {
      inteira: 15,
      meia: 7.5,
    },
    'Quarta-Feira': {
      inteira: 15,
      meia: 7.5,
    },
    'Quinta-Feira': {
      inteira: 16,
      meia: 8,
    },
    'Sexta-Feira': {
      inteira: 26,
      meia: 13,
    },
    'Sábado': {
      inteira: 26,
      meia: 13,
    },
    'Domingo': {
      inteira: 26,
      meia: 13,
    },
  };

  const calcularPrecoTotal = () => {
    const precoMeia = 5;
    const precoInteira = 10;
    const precoDia = precosIngressos[diaSelecionado];
    const total = (quantidadeMeia * precoMeia + quantidadeInteira * precoInteira) + precoDia.inteira;
    setPrecoTotal(total);
  };

  const handleCalcularClique = () => {
    calcularPrecoTotal();
  };

  const handleContinuarClique = () => {
    navigate("/Poltrona");
  };

  return (
    <StyleIngresso>
      <section className='bloco1'>
        <h1 className='cinemaTitle'>Ingresso</h1>
      </section>
      <section className='cinema-title'>
        <h2>ESCOLHA UMA DATA PARA ASSISTIR ESTE FILME:</h2>
      </section>
      <section className='bloco2'>
        <label htmlFor='dia-select' className='selectLabel'>
          Dia da Semana:
        </label>
        <select
          id='dia-select'
          className='select'
          value={diaSelecionado}
          onChange={(e) => setDiaSelecionado(e.target.value)}
        >
          
          {Object.keys(precosIngressos).map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
        </select>
      </section>
      <section>
      <section className='bloco2'>
  <label htmlFor='horario-select' className='selectLabel'>
    Horário:
  </label>
  <select
    id='horario-select'
    className='select'
    value={horarioSelecionado}
    onChange={(e) => setHorarioSelecionado(e.target.value)}
  >
    <option value='14:30'>14:30</option>
    <option value='16:30'>16:30</option>
    <option value='18:30'>18:30</option>
  </select>
</section>
      </section>
      <section className='bloco2'>
        <label htmlFor='quantidade-meia' className='selectLabel'>
          Quantidade Meia Entrada:
        </label>
        <select
          id='quantidade-meia'
          className='select'
          value={quantidadeMeia}
          onChange={(e) => setQuantidadeMeia(parseInt(e.target.value, 10))}
        >
          {Array.from({ length: 21 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </section>
      <section className='bloco2'>
        <label htmlFor='quantidade-inteira' className='selectLabel'>
          Quantidade Inteira:
        </label>
        <select
          id='quantidade-inteira'
          className='select'
          value={quantidadeInteira}
          onChange={(e) => setQuantidadeInteira(parseInt(e.target.value, 10))}
        >
          {Array.from({ length: 21 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </section>
      <section>
        <Button texto='Calcular Preço Total' variant='primary' onClick={handleCalcularClique} />
      </section>
      <section>
        <p>Total: R$ {precoTotal.toFixed(2)}</p>
        <Button texto='Continuar' variant='primary' onClick={handleContinuarClique} />
      </section>
    </StyleIngresso>
  );
};

export default BannerIngresso;