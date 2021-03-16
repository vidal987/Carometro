import React from "react";
import estilos from './CadastrarAluno.module.css';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone-uploader';
import add from '../img/add.png';
import aluno from '../img/aluno.png';
import list from '../img/list.png';
import turma from '../img/turma.png';
import { Header } from '../Header/Header.js';
import { Fragment } from "react";

export class cadastraraluno extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-container1">
        <Header />
        <div className={estilos["container-cadastroRe"]}>
          <div className={estilos["top-container1"]}>
            <h1 className={estilos["page-title1"]}>Cadastrar Aluno</h1>
            <Link to="/Cadastrar">
              <button className={estilos["btn-voltar1"]}>Voltar</button>
            </Link>
          </div>
          <div className="form-groupRe">
            <div className={estilos["formRe"]}>
              <label>Nome completo</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="Nome Completo" />
            </div> 

            <div className={estilos["formRe"]}>
              <label>Turma</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="Turma" />
            </div>

            <div className={estilos["formRe"]}> 
              <label>Matricula</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="Matrícula" />
            </div>

            <div className={estilos["formRe"]}>
              <label>Telefone</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="Telefone" />
            </div>

            <div className={estilos["formRe"]}>
              <label>Celular</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="(00) 00000-0000" />
            </div>

            <div className={estilos["formRe"]}>
              <label>E-mail</label>
              <input type="text" name="Turma" placeholder="E-mail" />
            </div>

            <div className={estilos["formRe"]}>
              <label>Data de Nascimento</label><br></br>
              <input type="date" name="Matrícula"/>
            </div>

            <div className={estilos["formRe"]}>
            <label>Foto do Aluno</label>
            <Dropzone />
            </div>

            <div className={estilos["bot-container1"]}>
              <button type="button" className={estilos["btn-end"]}>Finalizar</button>
              <button type="button" className={estilos["btn-add-new"]}>Adicionar novo</button>
            </div>
            
          </div>
        </div>
      </div>
         );
  }
}
