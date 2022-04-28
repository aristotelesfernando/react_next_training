import Item01 from "../../components/Item01";
import Lista01 from "../../components/Lista01";

export default function componenteComFilhos01() {
    return (
        <div>
            <Lista01>
                <Item01 conteudo="Item #011" />
                <Item01 conteudo="Item #012" />
                <Item01 conteudo="Item #013" />
            </Lista01>
        </div>
    )
}