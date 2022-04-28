export default function jsx4() {
    const subtitulo = "estou no javascript";
    const operacao = <h3>{9 * 99}</h3>

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(1,99)}</h4>
            <h5>{entre(30,1,10)}</h5>
            {operacao}
        </div>
    );
}

function entre(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "sim";
    } else {
        return "não";
    }
}