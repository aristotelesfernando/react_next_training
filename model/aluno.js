export default class Aluno {
    #matricula
    #nome
    #idade
    #turma

    constructor(matricula, nome, idade, turma) {
        this.#matricula = matricula;
        this.#nome = nome;
        this.#idade = idade;
        this.#turma = turma;
    }

    get matricula() {
        return this.#matricula;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get turma() {
        return this.#turma;
    }

}