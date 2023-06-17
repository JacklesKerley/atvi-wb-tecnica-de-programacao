import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import axios from 'axios';

export default function ListaProduto(props) {
    const [produtos, setProdutos] = useState([]); 

    useEffect(() => {
        M.AutoInit();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/produto');
                const data = response.data;
                setProdutos(data); 
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Lista de Produtos</h5>
                <div className="col s3">
                    <input type="text" placeholder="Buscar"></input>
                </div>
            </div>
            <div className="">
                <select>
                    <option>Selecione</option>
                    <option>Mais consumidos</option>
                    <option>Menos consumidos</option>
                    <option>Mais consumidos por Gênero</option>
                </select>
            </div>
            <ul className="collection">
                {produtos.map((produto, index) => (
                    <li key={index} className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>{produto.nome}</p>
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
