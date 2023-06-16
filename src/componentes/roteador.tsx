import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaCliente from "./listaCliente";
import ListaServico from "./listaServico";
import ListaProduto from "./listaProduto";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="purple lighten-4"
                botoes={['Home', 'Cadastro de Cliente', 'Cadastro de Serviços', 'Cadastro de Produtos', 'Clientes', 'Serviços', 'Produtos']}
            />
        )

        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            );
        } else if (this.state.tela === 'Cadastro de Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            );
        } else if (this.state.tela === 'Cadastro de Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="purple lighten-4" />
                </>
            );
        } else if (this.state.tela === 'Cadastro de Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple lighten-4" />
                </>
            );
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            );
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="purple lighten-4" />
                </>
            );
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            );
        } else {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        }

    }
}