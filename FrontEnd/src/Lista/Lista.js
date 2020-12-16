import React from 'react';
import aluna from '../img/aluna.jpg';
import './Lista.css';
import { Header } from '../Header/Header.js';
import { Link } from 'react-router-dom';

export class Lista extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <Header/>
              <button className="btn-voltar"><Link to="./Home">Voltar</Link></button>
            <div class="container"> 
                <div class="grid-container">
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
