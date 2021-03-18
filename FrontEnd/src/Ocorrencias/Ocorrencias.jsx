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
    telefone: [],
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
        const telefone = res.data;
        const email = res.data;
        const idade = res.data;
        const turma = res.data;
        const matricula = res.data;
        const foto = res.data;

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
        const aluno = res.data;
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
        <Header />
        <div className="ocorrencias-container">
          <div className="header-ocorrencias">
            <h1 className="nome-aluno">Rebecca da Silva Souza Ramos</h1>
            <div className="btnvoltar-container">
            <Link to="/Turma"><button className="btn-voltar-ocorrencias">Voltar</button></Link>
            </div>
          </div>

          <div className="dadosAluno">

              <div className="container-ocorrencias">
                <div className="foto-container1">
                  <div className="photo-card">
                    <img src={student} className="ocorrencias-pic" />
                  </div>
                </div>
                <div className="card-info-aluno">
                  <div className="info-aluno">
                    <label>Telefone: {this.state.aluno.telefone}</label>
                    <label>E-mail: {this.state.aluno.email}</label>
                    <label>Idade: {this.state.aluno.idade}</label>
                    <label>Turma: {this.state.aluno.turma}</label>
                    <label>Matrícula: {this.state.aluno.matricula}</label>
                  </div>
                </div>
                <div className="buttons-aluno">
                  <div className="edit-delete-btn">
                    {/* Aqui será adicionada a função de Editar os dados do aluno */}
                    <img src={edit} />
                  </div>
                  <div className="edit-delete-btn">
                    <img src={del} />
                    {/* Aqui será adicionada a função de Excluir o aluno */}
                  </div>
                  <div className="edit-delete-btn">
                    <img src={printer} />
                    {/* Aqui será adicionada a função de Editar os dados do aluno */}
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-novaocorrencia-container">
              {/* Botão nova ocorrência */}
              <Link to="/NovaOcorrencia">
                <button className="btn-add-ocorrencia">Nova ocorrência</button>
              </Link>
            </div>
            <div className="ocorrencias-header">
              <h1 className="h1-ocorrencia">Ocorrências</h1>

              <div className="buttons-adicionar-filtrar">
                {/* Botão filtrar ocorrências */}
                <button className="btn-filtrar">
                  Filtrar
                </button>
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
                    <img src={edit} />
                  </div>
                  <div className="edit-delete-btn">
                    <img src={del} />
                    {/* Aqui será adicionada a função de Excluir a ocorrência */}
                  </div>
                </div>
                <div className="dados-criacao">
                  <label className="criadoPor">Criado por:</label>
                  {/* Data de criação da ocorrência e usuário que a criou */}
                  <label className="data-ocorrencia">{this.state.dataCriacao}</label>
                  <label>{this.state.criadoPor}</label>
                </div>
                {/* Ocorrencia fictícia 2 */}
                <div className="ocorrencia">
                  <div className="card-ocorrencia">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div className="buttons-ocorrencia">
                    <div className="edit-delete-btn">
                      {/* Aqui será adicionada a função de Editar a ocorrência */}
                      <img src={edit} />
                    </div>
                    <div className="edit-delete-btn">
                      <img src={del} />
                      {/* Aqui será adicionada a função de Excluir a ocorrência */}
                    </div>
                  </div>
                  <div className="dados-criacao">
                  <label className="criadoPor">Criado por:</label>
                    {/* Data de criação da ocorrência e usuário que a criou */}
                    <label className="data-ocorrencia">{this.state.dataCriacao}</label>
                    <label>{this.state.criadoPor}</label>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
}
