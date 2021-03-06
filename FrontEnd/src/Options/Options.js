import React from "react";
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
        <div className="home-container">
          <div className="container-homebtn">
              <div className="home-buttons">
                  <button className="home-btn">                    
                    <Link to="/CadastrarTurma"><img src={add} className="home-icon" /></Link>
                  </button>
                  <span className="span-home">Cadastrar</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                 
                  <Link to="/Lista"> <img src={add} className="home-icon" /></Link>
                </button>
                <span className="span-home">Listar</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                  
                  <Link to="/Aluno"><img src={add} className="home-icon" /></Link>
                  </button>
                <span className="span-home">Alunos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                  
                  <Link to="/Turma"><img src={add} className="home-icon" /></Link>
                </button>
                <span className="span-home">Turmas</span>
              </div>
          </div>
        </div>
        </div>
        );
    }
}
