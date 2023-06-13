import Cliente from "../modelo/cliente";

export default class Listagem5ClientesValorConsumido {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
  }

  listarClientesMaisConsumiramPorValor() {
    // Ordenar os clientes pelo atributo valorConsumido em ordem decrescente
    const clientesOrdenados = this.clientes.sort(
      (a, b) => b.valorConsumido - a.valorConsumido
    );

    // Listar os 5 primeiros clientes
    console.log("Os 5 clientes que mais consumiram em termos de valor são:");
    for (let i = 0; i < 5 && i < clientesOrdenados.length; i++) {
      const cliente = clientesOrdenados[i];
      console.log(
        `${cliente.nome} ${cliente.sobrenome} - Valor Consumido: R$ ${cliente.valorConsumido}`
      );
    }
  }
}
