import React from 'react'
import { StyleIngresso } from './ingresso.style'
import Header from '../../components/views/Header/Header'
import Footer from '../../components/views/Footer/Footer'


const Ingresso = () => {
    const poltronas = localStorage.getItem("poltronasSelecionadas")
    const email = localStorage.getItem("email")


    return (
        <>
            <Header />
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