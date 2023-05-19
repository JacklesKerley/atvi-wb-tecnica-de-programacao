import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class listagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);

        this.produtos.forEach(produto => {
            console.log(`\nNome: ${produto.nome} Valor: $${produto.valor} \n`);
        });
        console.log(`\n--------------------------------------\n`);
    }
}