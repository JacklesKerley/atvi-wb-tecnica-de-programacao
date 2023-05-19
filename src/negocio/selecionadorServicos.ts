import Servico from "../modelo/servico"


export default class SelecionadorServico {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        this.servicos= servicos
    }

    public selecionar(nome : string){
        let servicoAlvo = new Servico(nome,0)
        
        this.servicos.forEach(servico =>{
            if (nome === servico.getNome){
                servicoAlvo = servico
            }
        })
        return servicoAlvo
    }
}