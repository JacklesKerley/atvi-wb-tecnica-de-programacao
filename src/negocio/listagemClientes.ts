import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome[0].toUpperCase()}${cliente.nome.substring(1)} ${cliente.nomeSocial[0].toUpperCase()}${cliente.nomeSocial.substring(1)}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            const rgs = cliente.getRgs.map(rg => `${rg.getValor}`);
            console.log(`RG: ${rgs}`);
            const telefones = cliente.getTelefones.map(telefone => `${telefone.getDdd}-${telefone.getNumero}`).join(', ');
            console.log(`Telefone: ${telefones}`);
            console.log(`\n--------------------------------------\n`);
        });
        console.log(`\n`);
    }
}
