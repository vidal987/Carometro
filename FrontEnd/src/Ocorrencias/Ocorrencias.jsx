import React from "react";
import { Link } from 'react-router-dom';
import student from "../img/student.jpg";
import edit from "../img/edit.png";
import del from "../img/delete.png";
import printer from "../img/printer.png";
import "./Ocorrencias.css";
import { Header } from '../Header/Header.js';
import axios from 'axios';

export class Ocorrencias extends React.Component {
    constructor(props) {
      super(props);
    }

     state = {
        aluno: [],
        telefone:[],
        email: [],
        idade: [],
        turma: [],
        matricula: [], 
        foto: [] 
      }

    componentDidMount() {
        axios.get(`https://app20201221151730.azurewebsites.net/api/Alunos`)
        .then(res => {
            const aluno = res.data; 
            const telefone  = res.data; 
            const email  = res.data; 
            const idade  = res.data; 
            const turma  = res.data; 
            const matricula = res.data; 
            const foto  = res.data;         
            
            this.setState({ 
                aluno,
                telefone,
                email,
                idade,
                turma,
                matricula, 
                foto 
            });
        })
    }  

    componentDidMount() {
      axios.get(`https://app20201221151730.azurewebsites.net/api/Ocorrencias`)
      .then(res => {
          const ocorrencias = res.data; 
          const aluno  = res.data; 
          const dataCriacao = res.data; 
          const titulo = res.data; 
          const conteudo = res.data; 
          const criadoPor = res.data; 
          const idAluno = res.data; 
                   
          this.setState({ 
            ocorrencias,
            aluno, 
            dataCriacao, 
            titulo, 
            conteudo, 
            criadoPor, 
            idAluno
          });
      })
  } 
    render() {
      return (
          <div className="nav-container">
               <Header/>
                <div className="ocorrencias-container">
                  <div className="header-ocorrencias">
                    <h1 className="nome-aluno">Rebecca da Silva Souza Ramos</h1>
                    <Link to="/Turma"><button className="btn-voltar-ocorrencias">Voltar</button></Link>
                  </div>
                  <div className="dadosAluno">
                  <div className="container-ocorrencias">
                      <div className="photo-card">
                            <img src={student} className="ocorrencias-pic" />
                      </div>
                      <div className="card-info-aluno">
                        <div className="info-aluno">
                            <p>Telefone: { this.state.aluno.telefone}</p>
                            <p>E-mail: {this.state.aluno.email}</p>
                            <p>Idade: {this.state.aluno.idade}</p>
                            <p>Turma: {this.state.aluno.turma}</p>
                            <p>Matrícula: {this.state.aluno.matricula}</p>
                        </div>
                        <div className="dados-container">
                          {/* Dados ficticios de aluno para exemplificar */}
                            {/* <span className="dados-aluno">(xx) 9 0000-0000</span>
                            <span className="dados-aluno">aluno@senaisp.edu.br</span>
                            <span className="dados-aluno">18</span>
                            <span className="dados-aluno">E-115-1-2020-1DT/2DT</span>
                            <span className="dados-aluno">000000000000</span> */}
                        </div>
                      </div>
                      <div className="buttons-aluno">
                        <div className="edit-delete-btn">
                            {/* Aqui será adicionada a função de Editar os dados do aluno */}
                            <img src={edit}/>
                        </div>
                        <div className="edit-delete-btn">
                            <img src={del}/>
                            {/* Aqui será adicionada a função de Excluir o aluno */}
                        </div>
                        <div className="edit-delete-btn">
                            <img src={printer}/>
                            {/* Aqui será adicionada a função de Editar os dados do aluno */}
                        </div>
                      </div>
                  </div>

                      <div className="ocorrencias-header">
                        <h1 className="h1-ocorrencia">Ocorrências</h1>
                          {/* Botão filtrar ocorrências */}
                          <button className="btn-filtrar">
                            Filtrar
                          </button>

                          {/* Botão nova ocorrência */}
                          <Link className="link-btn" to="/NovaOcorrencia">
                            <button className="btn-add-ocorrencia">Nova ocorrência</button>
                          </Link>
                        <div className="buttons-adicionar-filtrar">

                        </div>
                      </div>

                      <div className="ocorrencias-area">

                    {/* Ocorrencia fictícia 1 */}
                        <div className="ocorrencia">
                          <div className="card-ocorrencia">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="buttons-ocorrencia">
                              <div className="edit-delete-btn">
                                {/* Aqui será adicionada a função de Editar a ocorrência */}
                                <img src={edit}/>
                              </div>
                              <div className="edit-delete-btn">
                                <img src={del}/>
                                {/* Aqui será adicionada a função de Excluir a ocorrência */}
                              </div>
                            </div>
                          <div className="dados-criacao">
                            <h3>Criada:</h3>
                            {/* Data de criação da ocorrência e usuário que a criou */}
                            <p className="data-ocorrencia">{this.state.dataCriacao}</p>
                            <p>{this.state.criadoPor}</p>
                          </div>
                    {/* Ocorrencia fictícia 2 */}
                        <div className="ocorrencia">
                          <div className="card-ocorrencia">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="buttons-ocorrencia">
                              <div className="edit-delete-btn">
                                {/* Aqui será adicionada a função de Editar a ocorrência */}
                                <img src={edit}/>
                              </div>
                              <div className="edit-delete-btn">
                                <img src={del}/>
                                {/* Aqui será adicionada a função de Excluir a ocorrência */}
                              </div>
                            </div>
                          <div className="dados-criacao">
                            <h3>Criada:</h3>
                            {/* Data de criação da ocorrência e usuário que a criou */}
                            <p className="data-ocorrencia">{this.state.dataCriacao}</p>
                            <p>{this.state.criadoPor}</p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        );
    }
}
