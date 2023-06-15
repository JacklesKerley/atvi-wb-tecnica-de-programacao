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
                <div className="valign-wrapper row">
                    <h5 className="col s9">Lista de Serviços</h5>
                    <div className="input-field col s3">
                        <input type="text" placeholder="Buscar"></input>
                    </div>
                </div>
                <ul className="collection">
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 1</p>
                        <p className="col s1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faPencil} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>

                        </p>
                    </li>
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 2</p>
                        <p className="col s1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faPencil} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </p>
                    </li>
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 3</p>
                        <p className="col s1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faPencil} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </p>
                    </li>
                    <li className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>Serviço 4</p>
                        <p className="col s1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faPencil} />
                            </button>
                            <button className="waves-effect waves-light" style={{ padding: '1px 0', color: '#26a69a', border: 'none', display: 'block', background: 'none' }}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </p>
                    </li>
                </ul>
            </div >
        )
    }
}