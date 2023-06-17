import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import axios from 'axios';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    const [clientes, setClientes] = useState([]); // Estado para armazenar os dados dos clientes

    useEffect(() => {
        M.AutoInit();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cliente');
                const data = response.data;
                setClientes(data); // Atualiza o estado com os dados dos clientes
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const estilo = `collection-item active ${props.tema}`;

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
                {clientes.map((cliente, index) => (
                    <li key={index} className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>{cliente.nome}</p>
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
                ))}
            </ul>
        </div>
    );
}
