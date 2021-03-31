import React from 'react';
// import aluna from '../img/aluna.jpg';
import './Lista.css';
import { Header } from '../Header/Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Lista extends React.Component {
    state = {
        erro: null,
        loading: null,
        dados: null
    };

    //Mais uma vez tentando pegar dados da API
    componentDidMount() {
        const buscarLista = async () => {
            try {
                this.setState({ erro: null, dados: null, loading: true });

                const res = await fetch('http://localhost:8000/api/alunos', {
                    method: "GET",
                    headers: {
                        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE3MjExNTgzLCJleHAiOjE2MTcyMTg3ODN9.NveJkfhY4vUccYbICoyf_k4ig_2p3b1baAOxGD53TsE"
                    }
                });

                const json = await res.json();

                if (res.status !== 200) throw new Error(json.mensagem);

                this.setState({ dados: json });

            } catch ({ message }) {
                this.setState({ erro: message, dados: null });
            } finally {
                this.setState({ loading: false });
            }
        };

        buscarLista();
    }
    render() {
        return (
            <div className="nav-container">
                <Header />
                <div class="container-lista">
                    <div class="botao">
                        <h1 className="page-title6">Alunos</h1>
                        <button type="button" className="btn-voltar5">Imprimir</button>
                        <Link to="./Home" style={{ color: '#FFF', textDecoration: 'none' }}>
                            <button type="button" className="btn-voltar6"> Voltar</button></Link>
                    </div>

                    <ul class="grid-container">
                        { this.state.loading && <p>Carregando...</p> }

                        { this.state.erro && <p>{this.state.erro}</p>}

                        { this.state.dados && this.state.dados.map(({ id, nome, foto }) => {
                            return (
                        <li key={`aluno_${id}`}> 
                            <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>
                                <div className="img-container">
                                    <img src={`http://localhost:8000/${foto}`} className="students" />
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
