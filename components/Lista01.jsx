export default function Lista01(props) {
    return (
        <div>
            <h1>Lista de Algo</h1>
            <ul style={{
               padding: 10
            }}>
                {props.children}
            </ul>
        </div>
    )
}