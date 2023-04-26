import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let produto = new Produto()
        produto.nome = this.entrada.receberTexto(`Por favor, digite o nome do produto: `)

        this.produtos.push(produto)
        console.log(`\nproduto cadastrado com sucesso!!\n`)
    }
}