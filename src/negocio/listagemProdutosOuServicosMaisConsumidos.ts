import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ProdutosOuServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;
  
    constructor(clientes: Array<Cliente>) {
      super();
      this.clientes = clientes;
    }
  
    public listar(): void {
      let produtos_consumidos: Array<{ nome: string; quantidade: number }> = [];
      this.clientes.forEach((cliente) => {
        cliente.getProdutosConsumidos.forEach((produto) => {
          const nome = produto.nome;
          const quantidade = (produtos_consumidos.find(
            (p) => p.nome === nome
          )?.quantidade || 0) + 1;
          const item = { nome, quantidade };
          const index = produtos_consumidos.findIndex((p) => p.nome === nome);
          if (index !== -1) {
            produtos_consumidos[index] = item;
          } else {
            produtos_consumidos.push(item);
          }
        });
      });
  
      const ordena_produto = produtos_consumidos.sort(
        (a, b) => b.quantidade - a.quantidade
      );
  
      console.log("\nProdutos mais consumidos:");
      ordena_produto.forEach((produto) => {
        console.log(`Nome: ${produto.nome} Quantidade: ${produto.quantidade}`);
      });
  
      let servicos_consumidos: Array<{ nome: string; quantidade: number }> = [];
      this.clientes.forEach((cliente) => {
        cliente.getServicosConsumidos.forEach((servico) => {
          const nome = servico.nome;
          const quantidade = (servicos_consumidos.find(
            (s) => s.nome === nome
          )?.quantidade || 0) + 1;
          const item = { nome, quantidade };
          const index = servicos_consumidos.findIndex((s) => s.nome === nome);
          if (index !== -1) {
            servicos_consumidos[index] = item;
          } else {
            servicos_consumidos.push(item);
          }
        });
      });
  
      const ordena_servico = servicos_consumidos.sort(
        (a, b) => b.quantidade - a.quantidade
      );
  
      console.log("\nServiços mais consumidos:");
      ordena_servico.forEach((servico) => {
        console.log(`Nome: ${servico.nome} Quantidade: ${servico.quantidade}`);
      });
    }
  }
  