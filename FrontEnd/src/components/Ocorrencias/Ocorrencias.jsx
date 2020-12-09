import React from "react";
import { Link } from 'react-router-dom';
import student from "../../img/student.jpg";
import edit from "../../img/edit.png";
import del from "../../img/delete.png";

export class Ocorrencias extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="ocorrencias-container">
          <div className="header-formandos">
            <h1 className="nome-aluno">Rebecca da Silva Souza Ramos</h1>
            <button className="btn-voltar-formandos"><Link to="/Turmas"></Link>Voltar</button>
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
              <h1 className="nome-aluno">Ocorrências</h1>
              <div className="ocorrencias-area">
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
              </div>
          </div>
        </div>
        );
    }
}