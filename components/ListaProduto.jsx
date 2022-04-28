export default function ListaProduto(props) {
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul style={{listStyle: "none"}}>
                {props.children}
            </ul>
        </div>
    )
}