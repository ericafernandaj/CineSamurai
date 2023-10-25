import { useState } from 'react';
import { StyleIngresso } from './BannerIngresso.style';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button/Button';

function BannerIngresso() {
  const navigate = useNavigate();

  const [quantidadeInteira, setQuantidadeInteira] = useState(0);
  const [quantidadeMeia, setQuantidadeMeia] = useState(0);
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-Feira');
  const [precoTotal, setPrecoTotal] = useState(0);

  const precosIngressos = {
    'Segunda-Feira': { inteira: 12, meia: 6 },
    'Terça-Feira': { inteira: 15, meia: 7.5 },
    'Quarta-Feira': { inteira: 15, meia: 7.5 },
    'Quinta-Feira': { inteira: 16, meia: 8 },
    'Sexta-Feira': { inteira: 26, meia: 13 },
    'Sábado': { inteira: 26, meia: 13 },
    'Domingo': { inteira: 26, meia: 13 },
  };

  const calcularPrecoTotal = () => {
    const precoDia = precosIngressos[diaSelecionado];
    const precoInteira = precoDia.inteira;
    const precoMeia = precoDia.meia;

    const totalInteira = quantidadeInteira * precoInteira;
    const totalMeia = quantidadeMeia * precoMeia;

    const total = totalInteira + totalMeia;
    setPrecoTotal(total);
  };

  const handleCalcular = () => {
    calcularPrecoTotal();
  };

  const handleContinuar = () => {
    navigate('/Poltrona');
  };

  return (
    <StyleIngresso>
      <section className="Titulo">
        <h1 className="cinemaTitulo">Ingresso</h1>
      </section>
        <section className="bloco1">
          <h2 className="cinemaTitulo2">Escolha uma data para assistir o filme:</h2>
        </section>
      <section className="caixaMaior">
        <section className="bloco2">
          <label htmlFor="diaSelect" className="selectLabel">
            Dia da Semana:
          </label>
          <select
            id="diaSelect"
            className="select"
            value={diaSelecionado}
            onChange={(e) => setDiaSelecionado(e.target.value)}
          >
            {Object.keys(precosIngressos).map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
          <label htmlFor="horarioSelect" className="selectLabel">
            Horário:
          </label>
          <select className="select">
            <option value="14:30">14:30</option>
            <option value="16:30">16:30</option>
            <option value="18:30">18:30</option>
          </select>
          <label htmlFor="quantidadeMeia" className="selectLabel">
            Quantidade Meia Entrada:
          </label>
          <select
            id="quantidadeMeia"
            className="select"
            value={quantidadeMeia}
            onChange={(e) => setQuantidadeMeia(parseInt(e.target.value, 10))}
          >
            {Array.from({ length: 20}, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <label htmlFor="quantidadeInteira" className="selectLabel">
            Quantidade Inteira:
          </label>
          <select
            id="quantidadeInteira"
            className="select"
            value={quantidadeInteira}
            onChange={(e) => setQuantidadeInteira(parseInt(e.target.value, 10))}
          >
            {Array.from({ length: 21 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        <section className="bloco3">
          <Button texto="Calcular Preço Total" variant="primary" onClick={handleCalcular} />
          <p>Total: {precoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          <Button texto="Continuar" variant="primary" onClick={handleContinuar} />
        </section>
        </section>
      </section>
    </StyleIngresso>
  );
}

export default BannerIngresso;
