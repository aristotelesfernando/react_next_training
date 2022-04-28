function acao01() {
    console.log("o botão foi clicado");
}

export default function botao() {

    function acao02() {
        console.log("o botão foi clicado de dentro do componente");
    }

    return (
        <div>
            <button onClick={acao01}>Click-me</button>
            <br />
            <button onClick={acao02}>Click-me (react)</button>
        </div>
    )
}