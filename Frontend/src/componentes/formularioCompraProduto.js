import M from 'materialize-css';
import React, { useEffect } from 'react';

export default function FormularioCompraProduto(props) {
    useEffect(() => {
        M.AutoInit();
      }, []);

    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Compras</h5>
                <div className="col s3"></div>
            </div>

            <form className="row">
                <div className="col s8">
                    <label>Selecione o Produto</label>
                    <select>
                        <option>Produto 1</option>
                        <option>Produto 2</option>
                    </select>
                </div>
                <div className="col s4">
                    <label>Selecione o Cliente</label>
                    <select>
                        <option>Cliente 1</option>
                        <option>Cliente 2</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col s12" style={{ marginTop: "8px" }}>
                        <button className="btn btn-cadastrar" type="submit" name="action">Comprar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
