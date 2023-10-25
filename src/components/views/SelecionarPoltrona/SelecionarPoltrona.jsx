import { StylePoltrona } from "./SelecionarPoltrona.style"
import ButtonPoltrona from "../../common/ButtonPoltrona/ButtonPoltrona"
import { useEffect, useState } from "react"
const SelecionarPoltrona = () => {
    const linha = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const colunas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const [poltronasSelecionadas, setPoltranasSelecionadas] = useState([])

    useEffect(() => {
        localStorage.setItem('poltronasSelecionadas', poltronasSelecionadas)
        console.log(localStorage.getItem("poltronasSelecionadas"))

    }, [poltronasSelecionadas])

    function handleSelecionarPoltrona(id, selecionada) {
        setPoltranasSelecionadas([...poltronasSelecionadas, id])

    }
    return (
        <StylePoltrona>

            {
                colunas.map((letra) => {
                    return (
                        <ul>
                            {linha.map((numero) => <ButtonPoltrona id={letra + numero} numero={numero} onClick={handleSelecionarPoltrona} poltronasSelecionadas={poltronasSelecionadas} setPoltronasSelecionadas={setPoltranasSelecionadas} />)}
                        </ul>)
                })
            }

        </StylePoltrona>
    )
}

export default SelecionarPoltrona