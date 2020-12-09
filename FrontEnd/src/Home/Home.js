import React from "react";
import '../App.scss'
import { Link } from 'react-router-dom';
import add from '../img/add.png';
import aluno from '../img/aluno.png';
import list from '../img/list.png';
import turma from '../img/turma.png';
import { Start } from '../Start/Start.js';
import { Turma } from '../Turma/Turma.js';
import { Options } from '../Cadastrar/Cadastrar';
import { Aluno } from '../Aluno/Aluno.js';
import { Login } from '../Login/Login.js';
import { Curso } from '../Curso/Curso.js';
import { Lista } from '../Lista/Lista.js';


export class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="home-container">
          <div className="container-homebtn">
              <div className="home-buttons">
                  <button className="home-btn">                    
                    <Link to="./Start"><img src={add} className="home-icon" /></Link>
                  </button>
                  <span className="span-home">Cadastrar</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                 
                  <Link to="./Lista"> <img src={list} className="home-icon" /></Link>
                </button>
                <span className="span-home">Listar</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                  
                  <Link to="./Aluno"><img src={aluno} className="home-icon" /></Link>
                  </button>
                <span className="span-home">Alunos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">                  
                  <Link to="./Turma"><img src={turma} className="home-icon" /></Link>
                </button>
                <span className="span-home">Turmas</span>
              </div>
          </div>
        </div>
        );
    }
}
