import React from "react";
import './cadastraraluno.css';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone-uploader';
import add from '../img/add.png';
import aluno from '../img/aluno.png';
import list from '../img/list.png';
import turma from '../img/turma.png';
import { Header } from '../Header/Header.js';

export class cadastraraluno extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
            return (

                <div className="nav-container">
                <Header/>
                <div className="home-container">
                  <div className="container-homebtn">
                  <div className="form">                          
                                <h1>Cadastrar Aluno</h1> 
                                    <label2>Nome completo</label2> 
                                    <input type="text" name="username" placeholder="Nome Completo" />
                                
                                    <div className="cadastroaluno2">
                                    <label3>Turma</label3>
                                    <label4>Matricula</label4>
                                    
                                    <input type="text" name="Turma" placeholder="Turma" />   
                                    <input type="text" name="Matrícula" placeholder="Matrícula" />    
                                  
                                    <label5>Telefone</label5>
                                    <label6>Celular</label6>
                                    <br></br>
                                    <input type="text" name="Turma" placeholder="Telefone" />      
                                    <input type="text" name="Matrícula" placeholder="(00) 00000-0000" />  
                                  
                                    <label7>E-mail</label7>
                                    <label8>Data de Nascimento</label8>
                                    <br></br> 
                                    <input type="text" name="Turma" placeholder="E-mail" />      
                                    <input type="text" name="Matrícula" placeholder="01/01/2001" />                                   
                            <Dropzone/>
                            <br></br>
                            <button type="button" className="btn-end">
                                <Link to="./" style={{ color: '#FFF', textDecoration: 'none' }}>Finalizar</Link>
                            </button>
                        <button type="button" className="btn-add-new">
                        <Link to="./Aluno" style={{ color: '#FFF', textDecoration: 'none' }}>Adicionar novo</Link> </button>
                            </div>

                  </div> 
                  </div>
                </div>
                </div>




                
         );
         }
        }
