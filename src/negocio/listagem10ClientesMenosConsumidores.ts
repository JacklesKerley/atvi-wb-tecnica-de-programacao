import Cliente from "../modelo/cliente";

export default class Listagem10ClientesMenosConsumidores {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    this.clientes = clientes;
  }

  listarClientesMenosConsumidores() {
    // Ordenar os clientes pelo atributo quantidadeConsumida em ordem decrescente
    const clientesOrdenados = this.clientes.sort(
      (a, b) => a.quantidadeConsumida - b.quantidadeConsumida
    );

    // Listar os 10 primeiros clientes
    console.log("Os 10 clientes que menos consumiram produtos ou serviços são:");
    for (let i = 0; i < 10 && i < clientesOrdenados.length; i++) {
      const cliente = clientesOrdenados[i];
      console.log(
        `${cliente.nome} ${cliente.sobrenome} - Quantidade: ${cliente.quantidadeConsumida}`
      );
    }
  }
}

