import Cliente from "../modelo/cliente";

export default class ListagemProdutosOuServicosMaisConsumidosPorGenero {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        const generoLabels: { [key: string]: string } = {
            M: "Masculino",
            F: "Feminino",
        };

        const produtos_consumidos: Map<string, Map<string, number>> = new Map();
        const servicos_consumidos: Map<string, Map<string, number>> = new Map();

        this.clientes.forEach((cliente) => {
            const genero = cliente.getGenero;

            cliente.getProdutosConsumidos.forEach((produto) => {
                const nome = produto.nome;

                const generoProdutos =
                    produtos_consumidos.get(genero) ?? new Map();

                const quantidade = generoProdutos.get(nome) ?? 0;
                generoProdutos.set(nome, quantidade + 1);

                produtos_consumidos.set(genero, generoProdutos);
            });

            cliente.getServicosConsumidos.forEach((servico) => {
                const nome = servico.nome;

                const generoServicos =
                    servicos_consumidos.get(genero) ?? new Map();

                const quantidade = generoServicos.get(nome) ?? 0;
                generoServicos.set(nome, quantidade + 1);

                servicos_consumidos.set(genero, generoServicos);
            });
        });

        console.log("\nProdutos mais consumidos por gênero:");
        produtos_consumidos.forEach((generoProdutos, genero) => {
            console.log(`Gênero: ${generoLabels[genero]}`);
            const ordena_produtos = Array.from(generoProdutos.entries()).sort(
                (a, b) => b[1] - a[1]
            );
            ordena_produtos.forEach((produto) => {
                console.log(`Nome: ${produto[0]} Quantidade: ${produto[1]}`);
            });
            console.log("---------------------------------------------------")
        });

        console.log("\nServiços mais consumidos por gênero:");
        servicos_consumidos.forEach((generoServicos, genero) => {
            console.log(`Gênero: ${generoLabels[genero]}`);
            const ordena_servicos = Array.from(generoServicos.entries()).sort(
                (a, b) => b[1] - a[1]
            );
            ordena_servicos.forEach((servico) => {
                console.log(`Nome: ${servico[0]} Quantidade: ${servico[1]}`);
            });
            console.log("---------------------------------------------------")
        });
    }
}
