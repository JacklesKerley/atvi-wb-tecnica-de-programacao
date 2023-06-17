export default function FormularioCadastroCliente(props) {
    return (
        <div className="container">
            <div className="valign-wrapper row titulo">
                <h5 className="col s9">Editar Clientes</h5>
                <div className="col s3"></div>
            </div>

            <form>
                <div className="row">
                    <div className="col s5">
                        <label htmlFor="first_name">Nome</label>
                        <input id="first_name" type="text" className="validate" value="Cliente" />
                    </div>
                    <div className="col s5">
                        <label htmlFor="last_name">Sobrenome</label>
                        <input id="last_name" type="text" className="validate" value="1" />
                    </div>
                    <div className="col s2">
                        <label htmlFor="genero">Gênero</label>
                        <input id="genero" type="text" className="validate" value="M" />
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" className="validate" value="111.234.567-89" />
                    </div>
                    <div className="col s2">
                        <label htmlFor="date-cpf">Emissão CPF</label>
                        <input id="date-cpf" className="validate" value="10/10/1990" />
                    </div>
                    <div className="col s4">
                        <label htmlFor="rg">RG</label>
                        <input id="rg" type="text" className="validate" value="11.234.567-8" />
                    </div>
                    <div className="col s2">
                        <label htmlFor="date-rg">Emissão RG</label>
                        <input id="date-rg" className="validate" value="10/10/1900" />
                    </div>
                </div>

                <div className="row">
                    <div className="col s6">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" className="validate" value="teste@email.com" />
                    </div>
                    <div className="col s3">
                        <label htmlFor="telefone">Telefone</label>
                        <input id="telefone" type="text" className="validate" value="(xx) 1234-1234)" />
                    </div>
                    <div className="col s3">
                        <label htmlFor="celular">Celular</label>
                        <input id="celular" type="text" className="validate" value="null" />
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <button className="btn btn-cadastrar" type="submit" name="action" >Atualizar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}