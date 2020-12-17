import React from "react";
import './Options.css';
import { Link } from 'react-router-dom';
import add from '../img/add.png';
import aluno from '../img/aluno.png';
import list from '../img/list.png';
import turma from '../img/turma.png';
import { Header } from '../Header/Header.js';

export class Options extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="nav-container">
        <Header/>
        <div className="home">
          <div className="container-homebtn">
            <div className="options-header">
              <h2 className="page-title">Cadastrar</h2>
              <Link to="/Home"><button className="" variant="primary">Voltar</button>{' '}</Link>   
            </div>
              <div className="home-buttons">
                  <button className="home-btn">                    
                    <Link to="/Usuario"><img src={add} className="home-icon" /></Link>
                  </button>
                  <span className="span-home">Usuário</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                 
                  <Link to="/Curso"> <img src={add} className="home-icon" /></Link>
                </button>
                <span className="span-home">Cursos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                  
                  <Link to="/cadastraraluno"><img src={add} className="home-icon" /></Link>
                  </button>
                <span className="span-home">Alunos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                  
                  <Link to="/CadastrarTurma"><img src={add} className="home-icon" /></Link>
                </button>
                <span className="span-home">Turmas</span>
              </div>
          </div>
        </div>
        </div>
        );
    }
}
