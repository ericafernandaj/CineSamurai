import Button from "../../../common/Button/Button"
import Poster from "../../Poster/Poster"
import { tema } from "../../../../style/theme"
import { StyleFilmes } from "./BannerFilmes.style"
import PoderosoChefao from "../../../../../public/programacao1.jpg"
import Faixaetaria16 from "../../../../../public/faixaEtaria.svg"
import Interestelar from "../../../../../public/Programacao2.jpg"
import TemposDeViolencia from "../../../../../public/Pogramacao3.jpg"
import FaixaEtaria10 from "../../../../../public/figurafaixaetaria10.png"
import { useNavigate } from 'react-router-dom';
import ButtonPoltrona from "../../../common/ButtonPoltrona/ButtonPoltrona"
const BannerFilmes = () => {
const navigate = useNavigate();
const handleClick = () => {
    navigate('/VendasOnline');
  };
  return (
    <StyleFilmes>
    <section className='initBox'>
        <h1>🍿Programação</h1>
        <ButtonPoltrona numero={10} />
    </section>
    <section >
    <section className="posterBox" >
        <Poster 
        imagem={PoderosoChefao} 
        color={tema.white50}
        titulo='O Poderoso Chefão'
        sinopse={`Don Vito Corleone (Marlon Brando) é o chefe de uma "família" de Nova York que está feliz, 
        pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, 
        Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo "justiça", vingança na verdade contra membros de uma quadrilha, 
        que espancaram barbaramente sua filha por ela ter se recusado a fazer sexo para preservar a honra. Vito discute, mas os argumentos de Bonasera o sensibilizam e ele promete que os homens,
        que maltrataram a filha de Bonasera não serão mortos, pois ela também não foi, mas serão severamente castigados. Vito porém deixa claro que ele pode chamar Bonasera algum dia para devolver o "favor".
        Do lado de fora, no meio da festa, está o terceiro filho de Vito, Michael (Al Pacino), um capitão da marinha muito decorado que há pouco voltou da 2ª Guerra Mundial.`}
        faixa={Faixaetaria16}/>
    </section>
    <section className="Botaoingresso">
    <Button texto='Ingresso' variant='primary' onClick={handleClick}/>
    </section>
    <section className="posterBox">
        <Poster
        imagem={Interestelar}
        color={tema.white50}
        titulo='Interestelar'
        sinopse={`Após ver a Terra consumindo boa parte de suas reservas naturais,
        um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial,
        possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos.
        Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, 
        sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.}
        `}
        faixa={FaixaEtaria10}/>
    </section>
    <section className="Botaoingresso">
    <Button texto='Ingresso' variant='primary' onClick={handleClick}/>
    </section>  
    <section className="posterBox">
        <Poster
        imagem={TemposDeViolencia}
        color={tema.white50}
        titulo='Pulp Fiction'
        sinopse={`Vincent Vega (John Travolta) e Jules Winnfield (Samuel L. Jackson) são dois assassinos profissionais trabalham fazendo cobranças para Marsellus Wallace (Ving Rhames), 
        um poderosos gângster. Vega é forçado a sair com a garota do chefe, temendo passar dos limites;
         enquanto isso, o pugilista Butch Coolidge (Bruce Willis) se mete em apuros por ganhar luta que deveria perder.
        `}
        faixa={Faixaetaria16}/>
    </section>
    <section className="Botaoingresso">
    <Button texto='Ingresso' variant='primary' onClick={handleClick}/>
    </section>
    </section>
   
    </StyleFilmes>
  )
}

export default BannerFilmes