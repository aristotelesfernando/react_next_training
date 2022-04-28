import listaAlunos from "../../data/listaAlunos";

export default function repeticaoAlunos(){

    function renderizarListaAlunos() {
        return listaAlunos.map(alunos => {
            return (
                <tr key={alunos.matricula}>
                    <td>{alunos.matricula}</td>
                    <td>{alunos.nome}</td>
                    <td>{alunos.idade}</td>
                    <td>{alunos.turma}</td>
                </tr>                
            )
        })
    }

    return (
        <div>
            <h2>Lista de alunos da escola XXX</h2>
            <table border="1px" cellspacing="5px" cellpadding="10px">
                <thead>
                    <tr>
                        <th>Matricula</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Turma</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarListaAlunos()}
                </tbody>
            </table>
        </div>
    )
}