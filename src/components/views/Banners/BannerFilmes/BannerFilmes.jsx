import Button from "../../../common/Button/Button"
import Poster from "../../Poster/Poster"
import { tema } from "../../../../style/theme"
import { StyleFilmes } from "./BannerFilmes.style"
import { useNavigate } from 'react-router-dom';
import { getFilmes } from "../../../../service/api";
import { useState } from "react";
import { useEffect } from "react";
import Faixaetaria16 from "../../../../../public/faixaEtaria.svg"
import { StyleSpinner } from "../../../common/Spinner/Spinner.style";


const BannerFilmes = () => {
    const [filmes, setFilmes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getFilmes();
                setFilmes(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);

    const handlesClick = (filme) => {
        localStorage.setItem('filme_snippet', JSON.stringify(filme))
        navigate('/Login');
    }

    return (
        <StyleFilmes>
            <section className='initBox'>
                <h1>🍿Programação</h1>

            </section>

            {filmes.length > 0 ?
            filmes.map(filme => {
                return (
                    <>
                        <section className="posterBox" >
                            <Poster
                                imagem={filme.url_imagem_capa}
                                color={tema.white50}
                                titulo={filme.nome}
                                sinopse={filme.sinopse}
                                faixa={Faixaetaria16} />
                        </section>
                        <section className="Botaoingresso">
                            <Button texto='Comprar Ingresso' variant='primary'
                                onClick={() => handlesClick({
                                    url_imagem_capa: filme.url_imagem_capa,
                                    nome: filme.nome,
                                    sinopse: filme.sinopse,
                                })} />
                        </section>
                    </>
                )
            })
            :
            <StyleSpinner></StyleSpinner>
        }
        </StyleFilmes>
    )
}

export default BannerFilmes