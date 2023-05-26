import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let servico = new Servico("",0)
        servico.nome = this.entrada.receberTexto(`Por favor, digite o nome do serviço: `)
        servico.valor = this.entrada.receberNumero(`Por favor, digite o valor do serviço no modelo 00.00:`)

        this.servicos.push(servico)
        console.log(`\nservico cadastrado com sucesso!!\n`)
    }
}