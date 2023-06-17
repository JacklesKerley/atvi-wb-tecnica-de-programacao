import React, { useState } from 'react';
import axios from 'axios';

export default function FormularioCadastroProduto(props) {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/produto/', {
                nome: nome,
                valor: parseFloat(valor)
            });
            console.log(response.data); 

            
            setNome('');
            setValor('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Cadastro de Produtos</h5>
                <div className="col s3"></div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s9">
                        <input
                            id="produto"
                            type="text"
                            className="validate"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                        <label htmlFor="produto">Nome do Produto</label>
                    </div>
                    <div className="input-field col s3">
                        <input
                            id="valor_produto"
                            type="number"
                            step="0.01"
                            className="validate"
                            value={valor}
                            onChange={(event) => setValor(event.target.value)}
                        />
                        <label htmlFor="valor_produto">Valor</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <button className="btn btn-cadastrar" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
