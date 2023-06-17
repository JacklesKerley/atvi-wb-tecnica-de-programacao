export default function FormularioCadastroProduto(props){
    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Cadastro de Produtos</h5>
                <div className="col s3"></div>
            </div>

            <form>
                <div className="row">
                    <div className="input-field col s9">
                        <input id="sevico" type="text" className="validate" />
                        <label htmlFor="sevico">Nome do Produto</label>
                    </div>
                    <div className="input-field col s3">
                        <input id="valor_servico" type="number" className="validate" />
                        <label htmlFor="valor_servico">Valor</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <button className="btn btn-cadastrar" type="submit" name="action">cadastrar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}