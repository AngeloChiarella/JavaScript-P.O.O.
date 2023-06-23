export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error("Novo nome nao pode ser vazio!")
        }
        this.#nome = novoNome;
    }

    get email() {
        return this.#email
    }

    set email(novoEmail) {
        if (novoEmail === '') {
            throw new Error("Novo email nao pode ser vazio!")
        }
        this.#email = novoEmail;
    }

    get nascimento() {
        return this.#nascimento
    }

    set nascimento(novoNascimento) {
        if (novoNascimento === '') {
            throw new Error("Novo nascimento nao pode ser vazio!")
        }
        this.#nascimento = novoNascimento;
    }

    get role() {
        return this.#role
    }

    set role(novoRole) {
        if (novoRole === '') {
            throw new Error("Novo role nao pode ser vazio!")
        }
        this.#role = novoRole;
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo
    }

    exibirInfos() {
        return `
        ${this.nome}, 
        ${this.email}, 
        ${this.nascimento}, 
        ${this.role}, 
        ${this.ativo}`
    }
}