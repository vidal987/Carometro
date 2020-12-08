import React from "react";
import { Link } from 'react-router-dom';
import student from "../../img/student.jpg";

export class Ocorrencias extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="ocorrencias-container">
            <h1 className="nome-aluno">Nome Completo do Aluno</h1>
          <div className="container-ocorrencias">
              <div className="photo-card">
                    <img src={student} className="ocorrencias-pic" />
              </div>
              <div className="card-info-aluno">
                <div className="info-aluno">
                    <h2>Telefone:</h2>
                    <h2>E-mail:</h2>
                    <h2>Idade:</h2>
                    <h2>Turma: </h2>
                    <h2>Matrícula:</h2>
                </div>
                <div className="dados-container">
                    <span className="dados-aluno">(xx) 9 0000-0000</span>
                    <span className="dados-aluno">aluno@senaisp.edu.br</span>
                    <span className="dados-aluno">18</span>
                    <span className="dados-aluno">E-115-1-2020-1DT/2DT</span>
                    <span className="dados-aluno">000000000000</span>
                </div>
              </div>
          </div>
        </div>
        );
    }
}