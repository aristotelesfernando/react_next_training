export default function SomentePar01(props) {

    const numeroPar = props.numero % 2 === 0;
    return numeroPar ? <h1>{props.numero}</h1> : <h3>{props.numero} não é par...</h3>

    // if(props.numero % 2 === 0) {
    //     return <h1>{props.numero}</h1>;
    // } else {
    //     return <h3>{props.numero} não é par...</h3>
    // }
}