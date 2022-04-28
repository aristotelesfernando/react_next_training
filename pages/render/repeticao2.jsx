export default function repeticao1() {
    const listaAprovados = [
        'Joao',
        'Maria',
        'Fernando',
        'Elaine',
        'Cacau',
        'Mingau',
        'Luna',
        'Eva',
        'Jade',
        'Lourinho'
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    //ou
    // function renderizarLista() {
    //     return listaAprovados.map(function(nome, i) {
    //         return <li key={i}>{nome}</li>
    //     })
    // }    

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}