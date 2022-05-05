import Filho1 from "./Filho1";

export default function Pai(props) {

    function falarComigo(param) {
        console.log(param);
        //console.log("alguem falou comigo");
    }

    return (
        <div>
            <Filho1 funcao={falarComigo}/>
        </div>
    )
}