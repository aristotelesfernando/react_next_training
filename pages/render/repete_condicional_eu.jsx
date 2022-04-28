export default function repete_condicional_eu() {
    
    function DeterminarPar() {
        const numeroPar = []
        for (let index = 1; index <= 10; index++){            
            if (index % 2 === 0) {
                numeroPar.push(<li key={index}>{index}</li>)
            }            
        }
        return numeroPar
    }

    return(
        <div>
            <h2>Numeros pares de 1 a 10</h2>
            {DeterminarPar()}
        </div>
    )
}