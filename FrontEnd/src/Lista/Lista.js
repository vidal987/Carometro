import React from 'react';
// import aluna from '../img/aluna.jpg';
import './Lista.css';
import { Header } from '../Header/Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Lista extends React.Component {
    state = {
        aluno: [],
        foto: []
      }
//Mais uma vez tentando pegar dados da API
    componentDidMount() {
        axios.get(`https://localhost:5001/api/Alunos`)
        .then(res => {
            const aluno = res.data; 
            const foto = res.data;           
            this.setState({ 
                aluno, 
                foto 
            });
        })
    }  
    render() {
        return (
            <div className="nav-container">
                <Header/>
              <button className="btn-voltar"><Link to="./Home">Voltar</Link></button>
            <div class="container"> 
                <div class="grid-container">
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                    <div>
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
