import React, { useState } from 'react';
import axios from 'axios';

export default function FormularioCadastroCliente(props) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg1, setRg1] = useState('');
    const [rg2, setRg2] = useState('');
    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/cliente/', {
                nome: `${nome} ${sobrenome}`,
                genero: genero,
                cpf: cpf,
                rg1: rg1,
                rg2: rg2,
                tel1: tel1,
                tel2: tel2
            });
            console.log(response.data); 

            
            setNome('');
            setSobrenome('');
            setGenero('');
            setCpf('');
            setRg1('');
            setRg2('');
            setTel1('');
            setTel2('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Cadastro de Clientes</h5>
                <div className="col s3"></div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s5">
                        <input
                            id="first_name"
                            type="text"
                            className="validate"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                        <label htmlFor="first_name">Nome</label>
                    </div>
                    <div className="input-field col s5">
                        <input
                            id="last_name"
                            type="text"
                            className="validate"
                            value={sobrenome}
                            onChange={(event) => setSobrenome(event.target.value)}
                        />
                        <label htmlFor="last_name">Sobrenome</label>
                    </div>
                    <div className="input-field col s2">
                        <input
                            id="genero"
                            type="text"
                            className="validate"
                            value={genero}
                            onChange={(event) => setGenero(event.target.value)}
                        />
                        <label htmlFor="genero">Gênero</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s4">
                        <input
                            id="cpf"
                            type="text"
                            className="validate"
                            value={cpf}
                            onChange={(event) => setCpf(event.target.value)}
                        />
                        <label htmlFor="cpf">CPF</label>
                    </div>
                    <div className="input-field col s4">
                        <input
                            id="rg1"
                            type="text"
                            className="validate"
                            value={rg1}
                            onChange={(event) => setRg1(event.target.value)}
                        />
                        <label htmlFor="rg1">RG</label>
                    </div>
                    <div className="input-field col s4">
                        <input
                            id="rg2"
                            type="text"
                            className="validate"
                            value={rg2}
                            onChange={(event) => setRg2(event.target.value)}
                        />
                        <label htmlFor="rg2">Outro RG</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s3">
                        <input
                            id="tel1"
                            type="text"
                            className="validate"
                            value={tel1}
                            onChange={(event) => setTel1(event.target.value)}
                        />
                        <label htmlFor="tel1">Telefone 1</label>
                    </div>
                    <div className="input-field col s3">
                        <input
                            id="tel2"
                            type="text"
                            className="validate"
                            value={tel2}
                            onChange={(event) => setTel2(event.target.value)}
                        />
                        <label htmlFor="tel2">Telefone 2</label>
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
