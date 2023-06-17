export default function FormularioCadastroProduto(props) {
    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Editar Produtos</h5>
                <div className="col s3"></div>
            </div>

            <form>
                <div className="row">
                    <div className="col s9">
                        <label htmlFor="sevico">Nome do Produto</label>
                        <input id="sevico" type="text" className="validate" value="Pomada Modeladora" />
                    </div>
                    <div className="col s3">
                        <label htmlFor="valor_servico">Valor</label>
                        <input id="valor_servico" className="validate" value="R$ 10,50" />
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <button className="btn btn-cadastrar" type="submit" name="action">Atualizar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}