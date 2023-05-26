import Entrada from "../io/entrada"
import Servico from "../modelo/servico"


export default class AtualizarServico {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
    }

    public atualizarNome(servicoAlvo: Servico, novoServico:string) {
        this.servicos.forEach(servico =>{
            if (servico.nome === servicoAlvo.nome){
                let indice = this.servicos.indexOf(servico)
                this.servicos[indice].nome = novoServico
            }
        })
    }
    public atualizarValor(servicoAlvo: Servico, novoValor:number) {
        this.servicos.forEach(servico =>{
            if (servico.nome === servicoAlvo.nome){
                let indice = this.servicos.indexOf(servico)
                this.servicos[indice].valor = novoValor
            }
        })
    }
    public atualizacaoCompleta(servicoAlvo: Servico){
        let entrada = new Entrada()
        let opcao1 = entrada.receberTexto(`Deseja atualizar o nome?: S/N `)
        if (opcao1 === 'S' || opcao1 === 's') {
            let nomeServicoAtualizado = entrada.receberTexto(`Por favor, digite o nome do serviço atualizado: `)
            this.atualizarNome(servicoAlvo,nomeServicoAtualizado)
        }

        let opcao2 = entrada.receberTexto(`Deseja atualizar o valor do serviço?: S/N `)
        if (opcao2 === 'S' || opcao2 === 's') {
            let valorServicoAtualizado = entrada.receberNumero(`Por Favor, digite o novo valor do produto no modelo 00.00: `)
            this.atualizarValor(servicoAlvo,valorServicoAtualizado)
        }
    }
}