import React from "react";
import estilos from "./Home.module.css"; //importação do module css
import { Link } from 'react-router-dom';
import add from '../img/add.png';
import aluno from '../img/aluno.png';
import list from '../img/list.png';
import turma from '../img/turma.png';
import { Header } from '../Header/Header.js';


export class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className={estilos["nav-container1"]}>
        <Header/>
        <div className={estilos["container-homepage"]}>
          <div className={estilos["home-opcoes"]}>
            {/* <div className="container-homebtn"> */}
              <div className={estilos["buttons-group"]}>

                {/* Botão para a página de cadastros */}
                  <Link to="/Cadastrar">
                    <button className={estilos["home-btn1"]}>                    
                      <img src={add} className={estilos["home-icon1"]} />
                      <span className={estilos["span-home"]}>Cadastrar</span>
                    </button>
                  </Link>

              {/* Botão para a página Listar */}
                <Link to="/Ocorrencias"> 
                  <button className={estilos["home-btn1"]}>                 
                    <img src={list} className={estilos["home-icon1"]} />
                    <span className={estilos["span-home"]}>Ocorrências</span>
                  </button>
                </Link>
                

              {/* Botão para página Alunos */}
             
                <Link to="/Lista" className={estilos["link-home"]}>
                  <button className={estilos["home-btn1"]}>                  
                    <img src={aluno} className={estilos["home-icon1"]}/>
                    <span className={estilos["span-home"]}>Alunos</span>
                  </button>
                  
                </Link>
              
              {/* Botão para página Turmas */}
              
                <Link to="/Turma" className={estilos["link-home"]}>
                  <button className={estilos["home-btn1"]}>                  
                  <img src={list} className={estilos["home-icon1"]} />
                    <span className={estilos["span-home"]}>Turmas</span>
                  </button>
                </Link>
               
                 {/* Botão para página Formandos */}
                <Link to="/Formandos" className={estilos["link-home"]}>
                  <button className={estilos["home-btn1"]}>                  
                    <img src={turma} className={estilos["home-icon1"]}/>
                    <span className={estilos["span-home"]}>Formandos</span>
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        );
    }
}

{/* Este botão não deveria existir, está comentado por enquanto para ser deletado posteriormente. */}
                
                {/* <div className="home-buttons">
                  <button className="home-btn">                  
                    <Link to="/Ocorrencias"><img src={aluno} className="home-icon" /></Link>
                  </button>
                  <span className="span-home">Ocorrencias</span>
                </div> */}