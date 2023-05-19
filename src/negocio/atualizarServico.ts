import Servico from "../modelo/servico"


export default class AtualizarServico {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
    }

    public atualizar(servicoAlvo: Servico, novoServico:string, novoValor:number) {
        this.servicos.forEach(servico =>{
            if (servico.nome === servicoAlvo.nome){
                let indice = this.servicos.indexOf(servico)
                this.servicos[indice].nome = novoServico
                this.servicos[indice].valor = novoValor
            }
        })
    }
}