import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";
import SelecionadorCliente from "../negocio/selecionador";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Lista todos os produtos`);
    console.log(`5 - Cadastrar servico`);
    console.log(`6 - Lista todos os servicos`);
    console.log(`7 - Excluir cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 3:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 6:
            let selecionadorCliente = new SelecionadorCliente(empresa.getClientes)
            let cpf = entrada.receberTexto(`Por favor, digite o cpf do cliente para excluir`)
            let cliente = selecionadorCliente.selecionar(cpf)
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}