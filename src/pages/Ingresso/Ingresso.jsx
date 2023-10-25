import React from 'react'
import { StyleIngresso } from './ingresso.style'
import HeaderLogado from '../../components/views/HeaderLogado/HeaderLogado'
import Footer from '../../components/views/Footer/Footer'


const Ingresso = () => {
    const poltronas = localStorage.getItem("poltronasSelecionadas")
    const email = localStorage.getItem("email")


    return (
        <>
            <HeaderLogado />
            <StyleIngresso>
                <h2>Parabéns, você finalizou sua compra!</h2>
                <p color="white">Suas poltronas: {`${poltronas}`}</p >
                <p>Seus ingresso foram enviados para o email: {`${email}`}</p>

            </StyleIngresso>
            <Footer />
        </>
    )
}

export default Ingresso