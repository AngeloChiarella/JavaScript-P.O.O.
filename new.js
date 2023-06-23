// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function () {
//         return `${this.nome} ${this.email}`
//     }
// }

// Criar objeto usando construtor
// const novoUser = new User('Juliana', 'j@j.com')
// console.log(novoUser.exibirInfos());


// function Admin(role) {
//     User.call(this, 'Juliana', 'j@j.com');
//     this.role = role || 'estudante';
// }

// Puxamos as propriedade de User para dentro de Admin, usanto Object.create
// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

// Objeto literal
const user = {
    init: function (nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfos2: function (nome) {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos2());

// console.log(novoUser.exibirInfos2('Juliana'));
// console.log(user.isPrototypeOf(novoUser));

