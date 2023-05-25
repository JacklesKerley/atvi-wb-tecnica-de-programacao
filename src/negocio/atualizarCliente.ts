import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Telefone from "../modelo/telefone";
import SelecionadorCliente from "./selecionadorCliente";

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public atualizarNome(clienteAlvo: Cliente, novoNome: string, novoSobrenome: string) {
        this.clientes.forEach(cliente => {
            if (cliente.nome === clienteAlvo.nome) {
                let indice = this.clientes.indexOf(cliente)
                this.clientes[indice].nome = novoNome
                this.clientes[indice].sobrenome = novoSobrenome
            }
        })
    }
    public atualizarTelefone1(clienteAlvo: Cliente, telefone1: Telefone) {
        this.clientes.forEach(cliente => {
            if (cliente.nome === clienteAlvo.nome) {
                let indice = this.clientes.indexOf(cliente)
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
    public atualizacaoCompleta(clienteAlvo: Cliente) {
        let entrada = new Entrada()
        let opcao1 = entrada.receberTexto(`Deseja atualizar o nome?: S/N `)
        if (opcao1 === 'S' || opcao1 === 's') {
            let nomeClienteAtualizado = entrada.receberTexto(`Por favor, digite o nome do cliente atualizado: `)
            let sobrenomeClienteAtualizado = entrada.receberTexto(`Por favor, digite o sobrenome do cliente atualizado: `)
            this.atualizarNome(clienteAlvo, nomeClienteAtualizado, sobrenomeClienteAtualizado)
        }

        let opcao2 = entrada.receberTexto(`Deseja atualizar o telefone?: S/N `)
        if (opcao2 === 'S' || opcao2 === 's') {
            let telefoneClienteAtualizado = entrada.receberTexto(`Por favor, digite o telefone do cliente atualizado no modelo 99-99999999: `)
            let partesTel = telefoneClienteAtualizado.split('-')
            let ddd = partesTel[0].valueOf()
            let numero = partesTel[1].valueOf()
            let telefone = new Telefone(ddd, numero)
            this.atualizarTelefone1(clienteAlvo, telefone)
        }

        let opcao3 = entrada.receberTexto(`Deseja adicionar ou atualizar outro telefone?: S/N `)
        if (opcao3 === 'S' || opcao3 === 's') {
            let telefoneClienteAtualizado = entrada.receberTexto(`Por favor, digite o segundo telefone do cliente atualizado no modelo 99-99999999: `)
            let partesTel = telefoneClienteAtualizado.split('-')
            let ddd = partesTel[0].valueOf()
            let numero = partesTel[1].valueOf()
            let telefone2 = new Telefone(ddd, numero)
            this.atualizarTelefone2(clienteAlvo, telefone2)
        }
    }
}