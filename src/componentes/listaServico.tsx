/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
    render() {
        return (
            <div className="container">
                <div className="valign-wrapper row titulo">
                    <h5 className="col s9">Lista de Serviços</h5>
                    <div className="col s3">
                        <input type="text" placeholder="Buscar"></input>
                    </div>
                </div>
                <ul className="collection">
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 1</p>
                        <p className="col s1 caixa-btn-pg-cadastros">
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faPencil} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </a>

                        </p>
                    </li>
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 2</p>
                        <p className="col s1 caixa-btn-pg-cadastros">
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faPencil} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </a>
                        </p>
                    </li>
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 3</p>
                        <p className="col s1 caixa-btn-pg-cadastros">
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faPencil} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </a>
                        </p>
                    </li>
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 4</p>
                        <p className="col s1 caixa-btn-pg-cadastros">
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faPencil} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </a>
                        </p>
                    </li>
                </ul>
            </div >
        )
    }
}