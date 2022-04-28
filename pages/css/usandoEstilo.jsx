import Estilo from "../../components/estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero = {3} color="#000"/>
            <Estilo numero = {-3} color="#FFF" direita/>
        </div>
    )
}