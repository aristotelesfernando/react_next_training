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
        return listaAprovados.map(function(nome, i) {
            return <li key={i}>{nome}</li>
        })
    }

    // function renderizarLista() {
    //     const itens = []

    //     for (let index = 0; index < listaAprovados.length; index++) {
    //         itens.push(<li key={index}>{listaAprovados[index]}</li>)            
    //     }
    //     return itens
    // }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}