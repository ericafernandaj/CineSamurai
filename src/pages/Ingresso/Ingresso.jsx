import React from 'react'
import { StyleIngresso } from './ingresso.style'
import HeaderLogado from '../../components/views/HeaderLogado/HeaderLogado'
import Footer from '../../components/views/Footer/Footer'
import MeuCinema from "../../../public/cinema.svg"


const Ingresso = () => {
    const poltronas = localStorage.getItem("poltronasSelecionadas")
    const email = localStorage.getItem("email")
    const filme = localStorage.getItem("filme_snippet")

    return (
        <>
            <HeaderLogado />
            <StyleIngresso>
                <section className="bloco-ingresso">
                    <h1>🎞 Ingressos 🎞</h1>
                    <h2>Parabéns, você finalizou sua compra!</h2>
                    <p color="white">Suas poltronas: </p >
                    <strong className="poltronasDestaque">{`${poltronas}`}</strong>

                    <p>Seus ingressos foram enviados para o email:</p> <strong className="emailDestaque">{`${email}`}</strong> 
                </section>

                <picture>
                    <img src={MeuCinema} alt="fite de filme roxa" />

                </picture>
            </StyleIngresso>
            <Footer />
        </>
    )
}

export default Ingresso