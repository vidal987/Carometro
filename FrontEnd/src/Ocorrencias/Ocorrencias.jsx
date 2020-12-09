import React from "react";
import { Link } from 'react-router-dom';
import student from "../img/student.jpg";
import edit from "../img/edit.png";
import del from "../img/delete.png";
import printer from "../img/printer.png";
import "./Ocorrencias.css";

export class Ocorrencias extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="ocorrencias-container">
          <div className="header-ocorrencias">
            <h1 className="nome-aluno">Rebecca da Silva Souza Ramos</h1>
            <button className="btn-voltar-ocorrencias"><Link to="/Turmas"></Link>Voltar</button>
          </div>
          <div className="container-ocorrencias">
              <div className="photo-card">
                    <img src={student} className="ocorrencias-pic" />
              </div>
              <div className="card-info-aluno">
                <div className="info-aluno">
                    <p>Telefone:</p>
                    <p>E-mail:</p>
                    <p>Idade:</p>
                    <p>Turma: </p>
                    <p>Matrícula:</p>
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

              <div className="ocorrencias-header">
                <h1 className="nome-aluno">Ocorrências</h1>
                <div className="buttons-adicionar-filtrar">
                  <button className="btn-filtrar"><Link to=""></Link>Filtrar</button>
                  <button className="btn-add-ocorrencia"><Link to=""></Link>Nova ocorrência</button>
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
                    <p className="data-ocorrencia">25/11/2020</p>
                    <p>Claudia Camusso</p>
                  </div>
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
                    <p className="data-ocorrencia">18/10/2020</p>
                    <p>Claudia Camusso</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        );
    }
}