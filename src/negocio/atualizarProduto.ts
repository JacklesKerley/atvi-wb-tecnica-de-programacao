import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class AtualizarProduto {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
    }

    public atualizarNome(produtoAlvo: Produto, novoProduto: string) {
        this.produtos.forEach(produto => {
            if (produto.nome === produtoAlvo.nome) {
                let indice = this.produtos.indexOf(produto)
                this.produtos[indice].nome = novoProduto
            }
        })
    }
    public atualizarValor(produtoAlvo: Produto, novoValor: number) {
        this.produtos.forEach(produto => {
            if (produto.nome === produtoAlvo.nome) {
                let indice = this.produtos.indexOf(produto)
                this.produtos[indice].valor = novoValor
            }
        })
    }
    public atualizacaoCompleta(produtoAlvo: Produto) {
        let entrada = new Entrada()
        let opcao1 = entrada.receberTexto(`Deseja atualizar o nome?: S/N `)
        if (opcao1 === 'S' || opcao1 === 's') {
            let nomeProdutoAtualizado = entrada.receberTexto(`Por favor, digite o nome do produto atualizado: `)
            this.atualizarNome(produtoAlvo,nomeProdutoAtualizado)
        }

        let opcao2 = entrada.receberTexto(`Deseja atualizar o valor do produto?: S/N `)
        if (opcao2 === 'S' || opcao2 === 's') {
            let valorProdutoAtualizado = entrada.receberNumero(`Por Favor, digite o novo valor do produto no modelo 00.00: `)
            this.atualizarValor(produtoAlvo,valorProdutoAtualizado)
        }
    }
}