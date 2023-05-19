import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente\n`);

        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let sobrenome = this.entrada.receberTexto(`Por favor, informe o sobrenome do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor, informe o gênero do cliente M/F: `)

        //pega o CPF + data de emissão
        let valorCPF = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesDataCPF = dataCPF.split('/')
        let ano = new Number(partesDataCPF[2].valueOf()).valueOf()
        let mes = new Number(partesDataCPF[1].valueOf()).valueOf()
        let dia = new Number(partesDataCPF[0].valueOf()).valueOf()
        let dataEmissaoCPF = new Date(ano, mes, dia)
        let cpf = new CPF(valorCPF, dataEmissaoCPF);

        //pega o RG + data de emissão
        let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `)
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRG = dataRG.split('/')
        ano = new Number(partesDataRG[2].valueOf()).valueOf()
        mes = new Number(partesDataRG[1].valueOf()).valueOf()
        dia = new Number(partesDataRG[0].valueOf()).valueOf()
        let dataEmissaoRG = new Date(ano, mes, dia)
        let rg = new RG(valorRG, dataEmissaoRG);
        let cliente = new Cliente(nome, sobrenome, cpf,genero);
        this.clientes.push(cliente)
        cliente.adicionarRg(rg)
        let segundoRg = this.entrada.receberTexto(`Deseja adicionar outro RG? S/N`)

        //Cadastra o segundo RG
        if (segundoRg === 'S' || segundoRg === 's') {
            let valorRG2 = this.entrada.receberTexto(`Por favor informe o número do outro RG: `)
            let dataRG2 = this.entrada.receberTexto(`Por favor informe a data de emissão do outro RG, no padrão dd/mm/yyyy: `);
            let partesDataRG2 = dataRG2.split('/')
            ano = new Number(partesDataRG2[2].valueOf()).valueOf()
            mes = new Number(partesDataRG2[1].valueOf()).valueOf()
            dia = new Number(partesDataRG2[0].valueOf()).valueOf()
            let dataEmissaoRG2 = new Date(ano, mes, dia)
            let rg2 = new RG(valorRG2, dataEmissaoRG2);
            cliente.adicionarRg(rg2)
        }

        //pega o numero de telefone
        let tel = this.entrada.receberTexto(`Por favor informe o número do telefone 99-99999999: `)
        let partesTel = tel.split('-')
        let ddd = partesTel[0].valueOf()
        let numero = partesTel[1].valueOf()
        let telefone = new Telefone(ddd, numero)
        cliente.adicionarTelefone(telefone)
        let tel2 = this.entrada.receberTexto('Deseja adicionar outro número de telefone? S/N');
        let tele2 = '';
        //Cadastra o segundo número
        if (tel2 === 'S' || tel2 === 's') {
            tele2 = this.entrada.receberTexto('Por favor, informe o número do outro telefone 99-99999999: ');
            let partesTel2 = tele2.split('-');
            let ddd2 = partesTel2[0].valueOf();
            let numero2 = partesTel2[1].valueOf();
            let telefone2 = new Telefone(ddd2, numero2);
            cliente.adicionarTelefone(telefone2);
            console.log('\nCadastro concluído :)\n');
        } else {
            console.log('\nCadastro concluído :)\n');
        }
    }
}