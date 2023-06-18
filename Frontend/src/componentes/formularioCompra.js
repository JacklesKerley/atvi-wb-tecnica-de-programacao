export default function FormularioCadastroProduto(props) {
    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Compras</h5>
                <div className="col s3"></div>
            </div>

            <form className="row">
                <div className="col s3">
                    <label>Selecione o tipo de compra</label>
                    <select>
                        <option>Produto</option>
                        <option>Serviço</option>
                    </select>
                </div>
                <div className="col s8">
                    <label>Selecione o Produto</label>
                    <select>
                        <option>Produto 1</option>
                        <option>Produto 2</option>
                    </select>
                </div>
                <div className="col s1">
                    <label style={{ textAlign: "center" }}>Quantidade</label>
                    <input type="text" value="2" style={{ textAlign: "center" }} />
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
