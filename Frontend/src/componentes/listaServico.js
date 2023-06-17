import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import axios from 'axios';

export default function ListaServico(props) {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        M.AutoInit();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/servico');
                const data = response.data;
                setServicos(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/servico/${id}`);
            const updatedServicos = servicos.filter((servico) => servico.id !== id);
            setServicos(updatedServicos);
            console.log(`Serviço com o ID ${id} excluído com sucesso!`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Lista de Serviços</h5>
                <div className="col s3">
                    <input type="text" placeholder="Buscar" />
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
                {servicos.map((servico) => (
                    <li key={servico.id} className="collection-item valign-wrapper row">
                        <p className="col s11" style={{ color: '#26a69a' }}>{servico.nome}</p>
                        <p className="col s1 caixa-btn-pg-cadastros">
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a className="btn-procurar-editar-excluir">
                                <FontAwesomeIcon icon={faPencil} />
                            </a>
                            <a className="btn-procurar-editar-excluir" onClick={() => handleDelete(servico.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
