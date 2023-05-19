import Produto from "../modelo/produto";

export default class AtualizarProduto {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
    }

    public atualizar(produtoAlvo: Produto, novoProduto:string, novoValor:number) {
        this.produtos.forEach(produto =>{
            if (produto.nome === produtoAlvo.nome){
                let indice = this.produtos.indexOf(produto)
                this.produtos[indice].nome = novoProduto
                this.produtos[indice].valor = novoValor
            }
        })
    }
}