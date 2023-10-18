import { StylePoster } from "./Poster.style"
import  {Alarm} from "@phosphor-icons/react";
const Poster = ({imagem,color,titulo,sinopse}) => {
    return (
        <StylePoster>
            <picture>
                <img src={imagem} alt='Poster Do Filme'/>
            </picture>
            <div>
                <h2>{titulo}</h2>
                <Alarm color={color} size={20} />
                <p><strong>SINOPSE:</strong> {sinopse}</p>
            </div>
            
        </StylePoster>
    )
}

export default Poster