import Cliente from "../modelo/cliente";

export default class SelecionadorCliente{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        this.clientes= clientes
    }

    public selecionar(cpf : string){

        
        this.clientes.forEach(cliente =>{
            if (cpf === cliente.getCpf.getValor){
                return cliente
            }
        })
    }
}