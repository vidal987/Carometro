import React from "react";
import estilos from "./Cadastrar.module.css";
import { Link } from 'react-router-dom';
import add from '../img/add.png';
import { Header } from '../Header/Header.js';

export class Cadastrar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <div className={estilos["nav-container"]}>
          <Header/>
            <div className={estilos["container-cadastrar"]}>
              <div className={estilos["top-container1"]}>
                <h1 className={estilos["page-title1"]}>Cadastrar</h1>
                  <Link to="/Home">
                    <button className={estilos["btn-voltar1"]}>Voltar</button>
                  </Link>
              </div>
            <div className={estilos["home-buttons"]}>
              <Link to="/Cadastraraluno">
                <button className={estilos["home-btn1"]}>
                  <img src={add} className={estilos["home-icon1"]}/>
                  <span className={estilos["span-home"]}>Alunos</span>
                </button>
              </Link>
              
              <Link to="/Curso">
                <button className={estilos["home-btn1"]}>
                  <img src={add} className={estilos["home-icon1"]} />
                  <span className={estilos["span-home"]}>Cursos</span>
                </button>
              </Link>
              
              <Link to="/CadastrarTurma">
                <button className={estilos["home-btn1"]}>
                  <img src={add} className={estilos["home-icon1"]}/>
                  <span className={estilos["span-home"]}>Turmas</span>
                </button>
              </Link>
                    
              <Link to="/Aluno">
                <button className={estilos["home-btn1"]}>
                  <img src={add} className={estilos["home-icon1"]}/>
                  <span className={estilos["span-home"]}>Usuários</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        );
    }
}

