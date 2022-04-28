import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Familia {props.familia}</h1>
            <Filho nome="Fernando"  familia={props.familia}/>
            <Filho nome="Elaine"    familia={props.familia}/>
            <Filho {...props} nome="Eduardo"/>
        </div>
    )
}