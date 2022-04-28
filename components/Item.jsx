export default function Item(props) {
    return (
            <li key={props.key}>
                {props.conteudo}
            </li>
    )
}