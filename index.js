import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana', 'm@m.com', '2021-01-01')
const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')

// console.log(novoUser.exibirInfos())
console.log(novoAdmin.nome)

novoAdmin.nome = 'Andre';
console.log(novoAdmin.nome)

const novoDocente = new Docente("Guilherme", "g@g.com", "2021-01-01")
console.log(novoDocente.exibirInfos())
