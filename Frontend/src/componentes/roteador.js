import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import Home from "./home";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import FormularioCompraProduto from "./formularioCompraProduto";
import FormularioCompraServico from "./formularioCompraServiço";

export default function Roteador() {
    const [tela, setTela] = useState('Home')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        let barraNavegacao = (
            <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Compras Produto', 'Compras Serviço', 'Cadastro de Cliente', 'Cadastro de Serviços', 'Cadastro de Produtos', 'Clientes', 'Serviços', 'Produtos']} />
        )

        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientes tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastro de Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastro de Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Cadastro de Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Compras') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCompraProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Compras Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCompraProduto tema="purple lighten-4" />
                </>
            )
        } else if (tela === 'Compras Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCompraServico tema="purple lighten-4" />
                </>
            )
        }else {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}