import Produto from "../modelo/produto";

export default class SelecionadorProduto {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        this.produtos= produtos
    }

    public selecionar(nome : string){
        let produtoAlvo = new Produto(nome,0)
        
        this.produtos.forEach(produto =>{
            if (nome === produto.getNome){
                produtoAlvo = produto
            }
        })
        return produtoAlvo
    }
}