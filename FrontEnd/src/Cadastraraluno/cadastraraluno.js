import React from "react";
import '../App.scss';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone-uploader';
import { Header } from '../Header/Header.js';

export class cadastraraluno extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
            return (
                <div className="container">
                <Header/>
                  <div className="containercadastroaluno">
                    <button type="button" className="btncadastroaluno">
                        <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Voltar</Link></button>
                    <div className="content">
                        <div className="form">
                            <div className="cadastroaluno">
                                <h1>Cadastrar Aluno</h1> 
                                    <label2>Nome completo</label2>  
                                    <br></br>              
                                    <input type="text" name="username" placeholder="Nome Completo" />
                                    <br></br><br></br><br></br>
                                    </div>
                                    <div className="cadastroaluno2">
                                    <label3>Turma</label3>
                                    <label4>Matricula</label4>
                                    <br></br> 
                                    <input type="text" name="Turma" placeholder="Turma" />   
                                    <input type="text" name="Matrícula" placeholder="Matrícula" />    
                                    <br></br><br></br><br></br>
                                    <label5>Telefone</label5>
                                    <label6>Celular</label6>
                                    <br></br>
                                    <input type="text" name="Turma" placeholder="Telefone" />      
                                    <input type="text" name="Matrícula" placeholder="(00) 00000-0000" />  
                                    <br></br><br></br><br></br>   
                                    <label7>E-mail</label7>
                                    <label8>Data de Nascimento</label8>
                                    <br></br> 
                                    <input type="text" name="Turma" placeholder="E-mail" />      
                                    <input type="text" name="Matrícula" placeholder="01/01/2001" /> 
                                    <br></br><br></br><br></br> 
                            </div>

                            <Dropzone/>
                            <br></br>
                            <button type="button" className="btnalunofinalizar">
                                <Link to="./" style={{ color: '#FFF', textDecoration: 'none' }}>Finalizar</Link>
                            </button>
                        <button type="button" className="btnadicionarnovo">
                        <Link to="./Aluno" style={{ color: '#FFF', textDecoration: 'none' }}>Adicionar novo</Link> </button>
                  </div> 
              </div>
            </div>
    </div>
         );
         }
        }
