function gerarLista(final = 10) {
    const lista = [];
    for (var i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)
    }

    return lista
}


export default function lista_eu() {    
    return (
        <div>
            {gerarLista(25)}
        </div>
    );
}
