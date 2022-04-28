function acao01() {
    console.log("o botão foi clicado");
}

export default function botao() {

    function acao02() {
        console.log("o botão foi clicado de dentro do componente");
    }

    function acao05(e) {
        console.log(e);
    }

    return (
        <div>          
            <button onClick={acao01}>Click-me</button>
            <br />
            <button onClick={acao02}>Click-me (react)</button>
            <br />
            <button onClick={function() { 
                console.log("botão clicado dentro de uma função anonima...")
            }}>Click-me anonimous</button>
            <br />
            <button onClick={() => console.log("clicado dentro de uma arrow function")}>Click-me arrow function</button>
            <br />
            <button onClick={acao05}>Click-me evento</button>
            <br />
            <button onClick={e => acao05(e.altKey)}>Click-me evento de novo</button>            

            <div>
                <input type="text" onChange={() => console.log("mudou")}/>
                <br />
                <input type="text" onChange={e => console.log(e.target.value)}/>
                <br />                  
            </div>
        </div>
    )
}