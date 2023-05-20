import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public atualizar(clienteAlvo: Cliente, novoNome: string, novoSobrenome: string, telefone1: Telefone) {
        this.clientes.forEach(cliente => {
            if (cliente.nome === clienteAlvo.nome) {
                let indice = this.clientes.indexOf(cliente)
                this.clientes[indice].nome = novoNome
                this.clientes[indice].sobrenome = novoSobrenome
                let telefones = this.clientes[indice].getTelefones
                telefones[0] = telefone1
            }
        })
    }
    public atualizarTelefone2(clienteAlvo: Cliente, telefone2: Telefone) {
        this.clientes.forEach(cliente => {
            if (cliente.nome === clienteAlvo.nome) {
                let indice = this.clientes.indexOf(cliente)
                let telefones = this.clientes[indice].getTelefones
                telefones[1] = telefone2
            }
        })
    }
}