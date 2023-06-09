import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public sobrenome: string
    public genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    public quantidadeConsumida: number
    public valorConsumido: number

    constructor(nome: string, sobrenome: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.genero = genero
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.quantidadeConsumida = 0
        this.valorConsumido = 0
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    public get getGenero(): string {
        return this.genero
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public adicionarTelefone(telefone: Telefone): void {
        this.telefones.push(telefone)
    }
    public adicionarRg(rg: RG): void {
        this.rgs.push(rg)
    }
    public adicionarProdutoConsumido(produto: Produto): void {
        this.produtosConsumidos.push(produto)
    }
    public adicionarServicoConsumido(servico: Servico): void {
        this.servicosConsumidos.push(servico)
    }
}