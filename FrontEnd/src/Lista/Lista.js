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
            <div class="container"> 
            <div class="botao">
            <h1 className="page-title6">Alunos</h1>
            <Link style={{ color: '#FFF', textDecoration: 'none' }}>
                  <button type="button" className="btn-voltar5">
                    Imprimir</button></Link>
            <Link to="./Home" style={{ color: '#FFF', textDecoration: 'none' }}>
                  <button type="button" className="btn-voltar6">
                    Voltar</button></Link>
            <div class="grid-container">
                        <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                         <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                       <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                       <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                    <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    <div>
                        <a href="./Ocorrencias">
                        <img src={this.state.foto} className="students" />
                        { this.state.aluno.map(aluno => <span>{aluno.name}</span>)}
                        </a>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}><h6>Aluno</h6></Link>
                    </div>
                    </div>
                </div>
            </div>
            </div>
           
        );
    }
}
