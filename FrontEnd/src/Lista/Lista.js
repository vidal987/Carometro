import React from 'react';
// import aluna from '../img/aluna.jpg';
import './Lista.css';
import { Header } from '../Header/Header.js';
import { Link, withRouter } from 'react-router-dom';

class Lista extends React.Component {
    state = {
        erro: null,
        loading: null,
        dados: null
    };

    //Mais uma vez tentando pegar dados da API
    componentDidMount() {
        const { id } = this.props.match.params;
        const buscarLista = async (id) => {
            try {
                this.setState({ erro: null, dados: null, loading: true });

                const endpoint = (id) ? `turmas/${id}` : 'alunos';

                const res = await fetch(`http://localhost:8000/api/${endpoint}`, {
                    method: "GET",
                    headers: {
                        "x-access-token": window.localStorage.getItem("token") || ""
                    }
                });

                const json = await res.json();

                if (res.status !== 200) throw new Error(json.mensagem);

                this.setState({ dados: json.alunos || json });

            } catch ({ message }) {
                this.setState({ erro: message, dados: null });
            } finally {
                this.setState({ loading: false });
            }
        };

        buscarLista(id);
    }
    render() {
        return (
            <div className="nav-container">
                <Header />
                <div className="container-lista">
                    <div className="botao">
                        <h1 className="page-title6">Alunos</h1>
                        <button type="button" className="btn-voltar5">Imprimir</button>
                        <Link to="./Home" style={{ color: '#FFF', textDecoration: 'none' }}>
                            <button type="button" className="btn-voltar6"> Voltar</button></Link>
                    </div>

                    <ul className="grid-container">
                        { this.state.loading && <p>Carregando...</p> }

                        { this.state.erro && <p>{this.state.erro}</p>}

                        { this.state.dados && this.state.dados.map(({ id, nome, foto }) => {
                            return (
                        <li key={`aluno_${id}`}> 
                            <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>
                                <div className="img-container">
                                    <img src={`http://localhost:8000/${foto}`} className="students" alt="foto"/>
                                </div>
                                <h6>{ nome }</h6>
                            </Link>
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Lista);
