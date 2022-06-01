import { useState } from "react"

export default function formulario02() {

    const [valor, setValor] = useState("inicial");

    function alterarInput() {
        setValor(valor + " updated");
    }

    return (
        <div  style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1>{valor}</h1>
            <input type="text" 
                value={valor} 
                onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}
