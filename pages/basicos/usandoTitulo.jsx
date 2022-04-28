import Titulo from '../../components/Titulo';

export default function usandoTitulo() { 
    return (
        <div>
            <Titulo 
                principal="Página de Cadastro"
                descricao="Incluir, Alterar e Excluir coisas"
            />

            <Titulo 
                principal="Página de Cadastro"
                descricao="Incluir, Alterar e Excluir coisas"
                pequeno={true}
            />

        </div>
    )
}