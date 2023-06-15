/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="collection">
                <a className="collection-item">Servico 1</a>
                <a className={estilo}>Servico 2</a>
                <a className="collection-item">Servico 3</a>
                <a className="collection-item">Servico 4</a>
            </div>
        )
    }
}