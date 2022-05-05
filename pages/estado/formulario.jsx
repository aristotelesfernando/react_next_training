import { useState } from "react"

export default function formulario() {

    const [valor, setValor] = useState("")

    function alterarInput() {
        setValor(valor+"- VALOR ALTERADO")
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span>{valor}</span>
            <input type="text" placeholder="Digite aqui..." value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}