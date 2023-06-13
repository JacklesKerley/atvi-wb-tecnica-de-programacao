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
import CadastroProdutoConsumido from "../negocio/cadastroProdutoConsumido";
import CadastroServicoConsumido from "../negocio/cadastroServicoConsumido";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem10ClientesConsumidores from "../negocio/listagem10ClientesConsumidores";
import ProdutosOuServicosMaisConsumidos from "../negocio/listagemProdutosOuServicosMaisConsumidos";
import ListagemProdutosOuServicosMaisConsumidosPorGenero from "../negocio/listagemProdutosServicosGenero";
import Listagem10ClientesMenosConsumidores from "../negocio/listagem10ClientesMenosConsumidores";

console.log(`\nBem-vindo ao cadastro de clientes do Grupo World Beauty\n`)
let empresa = new Empresa()
let execucao = true

//Cadastro de alguns clientes
let cli1 = new Cliente("João", "Silva", new CPF("1", new Date()), "M")
let rg1 = new RG("1", new Date())
let tel1 = new Telefone("12", "11111111")
empresa.getClientes.push(cli1)
cli1.adicionarRg(rg1)
cli1.adicionarTelefone(tel1)

let cli2 = new Cliente("Gabriel", "Souza", new CPF("2", new Date()), "M")
let rg2 = new RG("2", new Date())
let tel2 = new Telefone("12", "22222222")
empresa.getClientes.push(cli2)
cli2.adicionarRg(rg2)
cli2.adicionarTelefone(tel2)

let cli3 = new Cliente("José", "Galvao", new CPF("3", new Date()), "M")
let rg3 = new RG("3", new Date())
let tel3 = new Telefone("12", "33333333")
empresa.getClientes.push(cli3)
cli3.adicionarRg(rg3)
cli3.adicionarTelefone(tel3)

let cli4 = new Cliente("Jessica", "Maria", new CPF("4", new Date()), "F")
let rg4 = new RG("4", new Date())
let tel4 = new Telefone("12", "44444444")
empresa.getClientes.push(cli4)
cli4.adicionarRg(rg4)
cli4.adicionarTelefone(tel4)

let cli5 = new Cliente("Julia", "Vania", new CPF("5", new Date()), "F")
let rg5 = new RG("5", new Date())
let tel5 = new Telefone("12", "55555555")
empresa.getClientes.push(cli5)
cli5.adicionarRg(rg5)
cli5.adicionarTelefone(tel5)

let cli6 = new Cliente("Matheus", "Monteiro", new CPF("6", new Date()), "M")
let rg6 = new RG("6", new Date())
let tel6 = new Telefone("12", "66666666")
empresa.getClientes.push(cli6)
cli6.adicionarRg(rg6)
cli6.adicionarTelefone(tel6)

let cli7 = new Cliente("Mario", "Lima", new CPF("7", new Date()), "M")
let rg7 = new RG("7", new Date())
let tel7 = new Telefone("12", "7777777")
empresa.getClientes.push(cli7)
cli7.adicionarRg(rg7)
cli7.adicionarTelefone(tel7)

let cli8 = new Cliente("Laura", "Nogueira", new CPF("8", new Date()), "F")
let rg8 = new RG("8", new Date())
let tel8 = new Telefone("12", "88888888")
empresa.getClientes.push(cli8)
cli8.adicionarRg(rg8)
cli8.adicionarTelefone(tel8)

let cli9 = new Cliente("Leticia", "Lima", new CPF("9", new Date()), "F")
let rg9 = new RG("9", new Date())
let tel9 = new Telefone("12", "99999999")
empresa.getClientes.push(cli9)
cli9.adicionarRg(rg9)
cli9.adicionarTelefone(tel9)

let cli10 = new Cliente("Simone", "Oliveira", new CPF("10", new Date()), "F")
let rg10 = new RG("10", new Date())
let tel10 = new Telefone("12", "10101010")
empresa.getClientes.push(cli10)
cli10.adicionarRg(rg10)
cli10.adicionarTelefone(tel10)

//Cadastro de alguns produtos
let pro1 = new Produto("Shampoo", 20.99)
let pro2 = new Produto("Gel", 10.99)
let pro3 = new Produto("Condicionador", 20.99)
let pro4 = new Produto("Pente", 15.99)
let pro5 = new Produto("Creme", 10.99)
let pro6 = new Produto("Fixadores", 24.99)
let pro7 = new Produto("Esmalte", 10.99)
let pro8 = new Produto("Secador de cabelo", 200.00)
let pro9 = new Produto("Gilete", 20.99)
let pro10 = new Produto("Minoxidil", 30.00)

empresa.getProdutos.push(pro1)
empresa.getProdutos.push(pro2)
empresa.getProdutos.push(pro3)
empresa.getProdutos.push(pro4)
empresa.getProdutos.push(pro5)
empresa.getProdutos.push(pro6)
empresa.getProdutos.push(pro7)
empresa.getProdutos.push(pro8)
empresa.getProdutos.push(pro9)
empresa.getProdutos.push(pro10)

//Cadastro de serviços
let s1 = new Servico("Corte", 25.00)
let s2 = new Servico("Corte + Barba", 50.00)
let s3 = new Servico("Sobrancelha", 60.00)
let s4 = new Servico("Botox", 80.00)
let s5 = new Servico("Pedicure", 40.00)
let s6 = new Servico("Limpeza de Pele", 80.00)
let s7 = new Servico("Maquiagem", 70.00)
let s8 = new Servico("Esfoliação", 60.00)
let s9 = new Servico("Escova", 65.00)
let s10 = new Servico("Hidratação Facial", 80.00)

empresa.getServicos.push(s1)
empresa.getServicos.push(s2)
empresa.getServicos.push(s3)
empresa.getServicos.push(s4)
empresa.getServicos.push(s5)
empresa.getServicos.push(s6)
empresa.getServicos.push(s7)
empresa.getServicos.push(s8)
empresa.getServicos.push(s9)
empresa.getServicos.push(s10)




while (execucao) {
    console.log(`Opções:\n`);
    console.log(`Clientes:`)
    console.log(`1  - Cadastrar cliente`);
    console.log(`2  - Listar todos os clientes`);
    console.log(`3  - Atualizar dados do cliente`);
    console.log(`4  - Excluir cliente`);
    console.log(`Produtos:`)
    console.log(`5  - Cadastrar produto`);
    console.log(`6  - Listar todos os produtos`);
    console.log(`7  - Atualizar produto`);
    console.log(`8  - Excluir produto`);
    console.log(`Serviços:`)
    console.log(`9  - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Atualizar serviço`);
    console.log(`12 - Excluir serviço`);
    console.log(`Compras:`)
    console.log(`13 - Comprar Produto`);
    console.log(`14 - Comprar Serviço`);
    console.log(`Listagens:`)
    console.log(`15 - Listagem de clientes por gênero`)
    console.log(`16 - Listagem dos 10 clientes que mais consumiram produtos ou serviços (Quantidade)`)
    console.log(`17 - Listagem de serviços ou produtos mais consumidos`)
    console.log(`18 - Listagem dos serviços ou produtos mais consumidos por gênero`)
    console.log(`19 - Listagem dos 10 clientes que menos consumiram produtos ou serviços`)
    console.log(`20 - Listagem dos 5 clientes que mais consumiram (Valor)`)
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
            atualizardorProduto.atualizacaoCompleta(produtoAlvo)
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
            atualizardorServico.atualizacaoCompleta(servicoAlvo)
            break;
        case 12:
            let selecionadorServico = new SelecionadorServico(empresa.getServicos)
            let nomeServico = entrada.receberTexto(`Por favor, digite o nome do serviço que deseja excluir: `)
            let servico = selecionadorServico.selecionar(nomeServico)

            let excluidorServico = new ExcluidorServico(empresa.getServicos)
            excluidorServico.excluir(servico)
            console.log(`\nServiço excluido: ` + servico.nome + `\n`)
            break;
        case 13:
            let selecionadorClienteAlvo = new SelecionadorCliente(empresa.getClientes)
            let cpfAlvo = entrada.receberTexto(`Por favor, digite o cpf do cliente que deseja atrelar a compra: `)
            let clienteAlvo = selecionadorClienteAlvo.selecionar(cpfAlvo)

            let cadastroProdutoConsumido = new CadastroProdutoConsumido(empresa.getClientes, empresa.getProdutos)
            cadastroProdutoConsumido.cadastrarProdutoConsumido(clienteAlvo)
            break;
        case 14:
            selecionadorClienteAlvo = new SelecionadorCliente(empresa.getClientes)
            cpfAlvo = entrada.receberTexto(`Por favor, digite o cpf do cliente que deseja atrelar a compra: `)
            clienteAlvo = selecionadorClienteAlvo.selecionar(cpfAlvo)

            let cadastroServicoConsumido = new CadastroServicoConsumido(empresa.getClientes, empresa.getServicos)
            cadastroServicoConsumido.cadastrarServicoConsumido(clienteAlvo)
            break;
        case 15:
            let listagemClientesGenero = new ListagemClientes(empresa.getClientes)
            listagemClientesGenero.listarGenero()
            break;
        case 16:
            const listagem10Clientes = new Listagem10ClientesConsumidores(empresa.getClientes);
            listagem10Clientes.listarClientesMaisConsumidores();
            break;
        case 17:
            let produtosOuServicosMaisConsumidos = new ProdutosOuServicosMaisConsumidos(empresa.getClientes)
            produtosOuServicosMaisConsumidos.listar()
            break;
        case 18:
            let listagemProdutoServicoGenero = new ListagemProdutosOuServicosMaisConsumidosPorGenero(empresa.getClientes)
            listagemProdutoServicoGenero.listar()
            break;
        case 19:
            let listagem10MenosConsumidores = new Listagem10ClientesMenosConsumidores(empresa.getClientes)
            listagem10MenosConsumidores.listarClientesMenosConsumidores()
            break;
        case 20:
            break;
        case 0:
            execucao = false
            console.log(`\nAté mais\n`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}