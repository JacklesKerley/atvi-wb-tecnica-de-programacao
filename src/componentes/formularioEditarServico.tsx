import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioEditarServico extends Component<props> {
    
    render() {
        return (
            <div className="container">
                <div className="valign-wrapper row titulo">
                    <h5 className="col s9">Editar Serviços</h5>
                    <div className="col s3"></div>
                </div>

                <form>
                    <div className="row">
                        <div className="col s9">
                            <label htmlFor="sevico">Nome do serviço</label>
                            <input id="sevico" type="text" className="validate" value="Corte de Cabelo"/>
                        </div>
                        <div className="col s3">
                            <label htmlFor="valor_servico">Valor</label>
                            <input id="valor_servico" className="validate" value="R$ 35,00"/>
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
}