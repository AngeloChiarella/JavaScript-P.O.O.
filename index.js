import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Mariana', 'm@m.com', '2021-01-01')
const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')

console.log(novoUser.exibirInfos())
console.log(novoAdmin.exibirInfos())

// console.log(novoUser.#montaObjUser())

// '#nome' e 'nome' nao sao o mesmo atributo
// novoUser.#nome = 'Marcia';
// console.log(novoUser.nome)