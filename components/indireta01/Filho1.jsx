export default function Filho1(props) {

    console.log(props.funcao);
    return (
        <div>
            <h1>Filho1 Alt#1</h1>
            <button onClick={props.funcao}>
                Falar... version#1
            </button>
            <button onClick={() => props.funcao("Passei no ENEM!")}>
                Falar... version#2
            </button>
        </div>
    )
}