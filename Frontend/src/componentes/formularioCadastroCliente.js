export default function FormularioCadastroCliente(props){
    return (
        <div className="container">
        <div className="valign-wrapper row titulo">
            <h5 className="col s9">Cadastro de Clientes</h5>
            <div className="col s3"></div>
        </div>

        <form>
            <div className="row">
                <div className="input-field col s5">
                    <input id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">Nome</label>
                </div>
                <div className="input-field col s5">
                    <input id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Sobrenome</label>
                </div>
                <div className="input-field col s2">
                    <input id="genero" type="text" className="validate" />
                    <label htmlFor="genero">Gênero</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s4">
                    <input id="cpf" type="text" className="validate" />
                    <label htmlFor="cpf">CPF</label>
                </div>
                <div className="input-field col s2">
                    <input id="date-cpf" type="date" className="validate" />
                    <label htmlFor="date-cpf">Emissão CPF</label>
                </div>
                <div className="input-field col s4">
                    <input id="rg" type="text" className="validate" />
                    <label htmlFor="rg">RG</label>
                </div>
                <div className="input-field col s2">
                    <input id="date-rg" type="date" className="validate" />
                    <label htmlFor="date-rg">Emissão RG</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="input-field col s3">
                    <input id="telefone" type="text" className="validate" />
                    <label htmlFor="telefone">Telefone</label>
                </div>
                <div className="input-field col s3">
                    <input id="celular" type="text" className="validate" />
                    <label htmlFor="celular">Celular</label>
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
)
}