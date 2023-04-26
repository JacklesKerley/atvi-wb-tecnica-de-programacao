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
        let servico = new Servico()
        servico.nome = this.entrada.receberTexto(`Por favor, digite o nome do servico: `)

        this.servicos.push(servico)
        console.log(`\nservico cadastrado com sucesso!!\n`)
    }
}