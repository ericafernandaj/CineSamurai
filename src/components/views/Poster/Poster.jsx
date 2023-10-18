import { StylePoster } from "./Poster.style"
import  {Alarm} from "@phosphor-icons/react";
const Poster = ({imagem,color,titulo,sinopse,faixa}) => {
    return (
        <StylePoster>
            <picture>
                <img className="imagem" src={imagem} alt='Poster Do Filme'/>
            </picture>
            <div>
                <h2 className="tituloFilme">{titulo}</h2>
                <div className="filmeInfo">
                <Alarm color={color} size={20} />
                <p>120 Minutos</p>
                <picture>
                    <img className="faixaEtaria" src={faixa} alt='faixa etaria 16 anos'/>
                </picture>
                </div>
                <p className="sinopse"><strong>Sinopse: </strong> {sinopse}</p>
            </div>
            
        </StylePoster>
    )
}

export default Poster