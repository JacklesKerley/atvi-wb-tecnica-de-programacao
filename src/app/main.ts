import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServicos";
import SelecionadorCliente from "../negocio/selecionadorCliente";
import ExcluidorCliente from "../negocio/excluidorCliente";
import SelecionadorProduto from "../negocio/selecionadorProduto.ts";
import ExcluidorProduto from "../negocio/excluidorProduto";
import SelecionadorServico from "../negocio/selecionadorServicos";
import ExcluidorServico from "../negocio/excluidorServicos";
import AtualizarServico from "../negocio/atualizarServico";
import AtualizarProduto from "../negocio/atualizarProduto";
import AtualizarCliente from "../negocio/atualizarCliente";
import Telefone from "../modelo/telefone";

console.log(`\nBem-vindo ao cadastro de clientes do Grupo World Beauty\n`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:\n`);
    console.log(`1  - Cadastrar cliente`);
    console.log(`2  - Listar todos os clientes`);
    console.log(`3  - Atualizar dados do cliente`);
    console.log(`4  - Excluir cliente`);
    console.log(`5  - Cadastrar produto`);
    console.log(`6  - Listar todos os produtos`);
    console.log(`7  - Atualizar produto`);
    console.log(`8  - Excluir produto`);
    console.log(`9  - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Atualizar serviço`);
    console.log(`12 - Excluir serviço`);

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
            let atualizacaoCliente = new AtualizarCliente(empresa.getClientes)
            let selecionadorClienteAtualizar = new SelecionadorCliente(empresa.getClientes)
            let cpfCliente = entrada.receberTexto(`Por favor, digite o cpf do cliente que deseja atualizar: `)
            let clienteAlvoAtualizar = selecionadorClienteAtualizar.selecionar(cpfCliente)
            console.log(clienteAlvoAtualizar)
            atualizacaoCliente.atualizacaoCompleta(clienteAlvoAtualizar)
            break;
        case 4:
            let selecionadorCliente = new SelecionadorCliente(empresa.getClientes)
            let cpf = entrada.receberTexto(`Por favor, digite o cpf do cliente que deseja excluir: `)
            let cliente = selecionadorCliente.selecionar(cpf)

            let excluidorCliente = new ExcluidorCliente(empresa.getClientes)
            excluidorCliente.excluir(cliente)
            console.log(`\nCliente excluido: ` + cliente.nome + `\n`)
            break;
        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 7:
            let selecionadorAtualizarProduto = new SelecionadorProduto(empresa.getProdutos)
            let nomeProdutoAtualizar = entrada.receberTexto(`Por favor, digite o nome do produto que deseja atualizar: `)
            let produtoAlvo = selecionadorAtualizarProduto.selecionar(nomeProdutoAtualizar)

            let atualizardorProduto = new AtualizarProduto(empresa.getProdutos)
            let nomeProdutoAtualizado = entrada.receberTexto(`Por favor, digite o nome do produto atualizado: `)
            let valorProdutoAtualizado = entrada.receberNumero(`Por Favor, digite o novo valor do produto 00.00:`)
            atualizardorProduto.atualizar(produtoAlvo, nomeProdutoAtualizado, valorProdutoAtualizado)
            break;
        case 8:
            let selecionadorProduto = new SelecionadorProduto(empresa.getProdutos)
            let nomeProduto = entrada.receberTexto(`Por favor, digite o nome do produto que deseja excluir: `)
            let produto = selecionadorProduto.selecionar(nomeProduto)

            let excluidorProduto = new ExcluidorProduto(empresa.getProdutos)
            excluidorProduto.excluir(produto)
            console.log(`\nProduto excluido: ` + produto.nome + `\n`)
            break;
        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 11:
            let selecionadorAtualizarServico = new SelecionadorServico(empresa.getServicos)
            let nomeServicoAtualizar = entrada.receberTexto(`Por favor, digite o nome do serviço que deseja atualizar: `)
            let servicoAlvo = selecionadorAtualizarServico.selecionar(nomeServicoAtualizar)

            let atualizardorServico = new AtualizarServico(empresa.getServicos)
            let nomeServicoAtualizado = entrada.receberTexto(`Por favor, digite o nome do serviço atualizado: `)
            let valorServicoAtualizado = entrada.receberNumero(`Por favor, digite o valor do serviço atualizado 00.00: `)
            atualizardorServico.atualizar(servicoAlvo, nomeServicoAtualizado, valorServicoAtualizado)
            break;
        case 12:
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let nomeServico = entrada.receberTexto(`Por favor, digite o nome do serviço que deseja excluir: `)
            let servico = selecionadorServico.selecionar(nomeServico)

            let excluidorServico = new ExcluidorServico(empresa.getServicos)
            excluidorServico.excluir(servico)
            console.log(`\nServiço excluido: ` + servico.nome + `\n`)
            break;
        case 0:
            execucao = false
            console.log(`\nAté mais\n`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}