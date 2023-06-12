import Cliente from "../modelo/cliente"
import Entrada from "../io/entrada";
import SelecionadorProduto from "./selecionadorProduto.ts";
import Servico from "../modelo/servico";


export default class CadastroServicoConsumido {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.servicos = servicos
    }

    public cadastrarServicoConsumido(clienteAlvo: Cliente) {
        let entrada = new Entrada()
        let selecionadorServicoAlvo = new SelecionadorProduto(this.servicos)
        let continuarCadastro = true;
        
        while (continuarCadastro) {
            let nomeServicoAlvo = entrada.receberTexto(`Por favor, digite o nome do serviço que deseja comprar: `)
            let servicoCompra = selecionadorServicoAlvo.selecionar(nomeServicoAlvo)
            console.log(servicoCompra)
            clienteAlvo.adicionarServicoConsumido(servicoCompra)
            
            let resposta = entrada.receberTexto(`Deseja comprar mais um servico? (S/N): `)
            if (resposta.toUpperCase() !== 'S') {
                continuarCadastro = false;
            }
        }
    }
}