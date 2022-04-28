import ProdutoItem from "../../components/produtoItem";
import ListaProdutos from "../../components/ListaProdutos";
import lista from "../../data/listaProdutos";

export default function listagemProdutos() {

    function renderizarLinha() {
        return lista.map(produto => ({
            return (
                <>
                <li>
                    {produto.nome}
                </li>
                </>
            )
        }))
    }

    return (
        <div>
            <ListaProdutos>
                {renderizarLinha()}
            </ListaProdutos>
        </div>
    )
}