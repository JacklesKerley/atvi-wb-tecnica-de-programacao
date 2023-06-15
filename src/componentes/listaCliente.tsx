/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <div className="container">
                <div className="valign-wrapper row">
                    <h5 className="col s9">Lista de Clientes</h5>
                    <div className="input-field col s3">
                        <input type="text" placeholder="Buscar"></input>
                    </div>
                </div>
                <div className="collection">
                    <a className="collection-item">Cliente 1</a>
                    <a className="collection-item">Cliente 2</a>
                    <a className="collection-item">Cliente 3</a>
                    <a className="collection-item">Cliente 4</a>
                </div>
            </div>
        )
    }
}