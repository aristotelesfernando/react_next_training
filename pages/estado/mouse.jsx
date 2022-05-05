import { useState } from "react";

export default function mouse() {

    // forma desconstruida
    const [x, setX] = useState(0)

    // forma mais verbosa
    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]


    const estilo = { 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#222', 
            color: '#fff',
            height: '100vh'
        };

    function quandoMover(ev) {
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    return (
        <div style= {estilo} onMouseMove={quandoMover}>
            <div>Eixo X: {x}</div>
            <div>Eixo Y: {y}</div>
        </div>
    )
}