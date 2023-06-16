import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    useEffect(() => {
        M.AutoInit(); 
      }, []);

    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="container">
                <div className="valign-wrapper row titulo">
                    <h5 className="col s9">Lista de Clientes</h5>
                    <div className="col s3">
                        <input type="text" placeholder="Buscar"></input>
                    </div>
                </div>
                <div className="">
                    <select>
                        <option>Selecione</option>
                        <option>Por Gênero</option>
                        <option>Maiores Compradores (Quantidade)</option>
                        <option>Menores Compradores (Quantidade)</option>
                        <option>Maiores Compradores (Valor)</option>
                    </select>
                </div>
                <ul className="collection">
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Cliente 1</p>
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
                        <p className="col s11" style={{ color: '#26a69a' }}>Cliente 2</p>
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
                        <p className="col s11" style={{ color: '#26a69a' }}>Cliente 3</p>
                        <p className="col s1 caixa-btn-pg-cadastros">
                            <a className="waves-effect waves-light btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a className="waves-effect waves-light btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faPencil} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </a>
                        </p>
                    </li>
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Cliente 4</p>
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
            </div>
        )
}