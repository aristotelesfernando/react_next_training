export default function ProdutoItem(props) {
    return (
            <li key={props.key}>
                {props.conteudo}
            </li>
    )
}