import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Entrada from "../io/entrada";
import SelecionadorProduto from "./selecionadorProduto.ts";


export default class CadastroProdutoConsumido {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes
        this.produtos = produtos
    }

    public cadastrarProdutoConsumido(clienteAlvo: Cliente) {
        let entrada = new Entrada()
        let selecionadorProdutoAlvo = new SelecionadorProduto(this.produtos)
        let continuarCadastro = true;
        
        while (continuarCadastro) {
            let nomeProdutoAlvo = entrada.receberTexto(`Por favor, digite o nome do produto que deseja comprar: `)
            let produtoCompra = selecionadorProdutoAlvo.selecionar(nomeProdutoAlvo)
            console.log(produtoCompra)
            clienteAlvo.adicionarProdutoConsumido(produtoCompra)
            
            let resposta = entrada.receberTexto(`Deseja comprar mais um produto? (S/N): `)
            if (resposta.toUpperCase() !== 'S') {
                continuarCadastro = false;
            }
        }
    }
}