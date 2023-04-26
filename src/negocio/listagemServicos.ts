import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);

        this.servicos.forEach(servico => {
            console.log(`\nNome: ` + servico.nome + `\n`);
        });
    }
}