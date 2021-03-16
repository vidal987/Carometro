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
              <input className={estilos["input-cadastro"]} type="text" placeholder="Nome Completo"></input>
            </div> 

            <div className={estilos["selectRe"]}>
              <label>Turma</label>
              <select className={estilos["input-cadastro"]} type="text" placeholder="Turma"></select>
            </div>

            <div className={estilos["formRe"]}> 
              <label>Matricula</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="Matrícula"></input>
            </div>

            <div className={estilos["formRe"]}>
              <label>Telefone</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="Telefone"></input>
            </div>

            <div className={estilos["formRe"]}>
              <label>Celular</label>
              <input className={estilos["input-cadastro"]} type="text" placeholder="(000) 00000-0000"></input>
            </div>

            <div className={estilos["formRe"]}>
              <label>E-mail</label>
              <input className={estilos["input-cadastro"]} type="text" name="Turma" placeholder="example@example.com"></input>
            </div>

            <div className={estilos["formRe"]}>
              <label>Data de Nascimento</label><br></br>
              <input className={estilos["input-cadastro"]} type="date" name="Matrícula"></input>
            </div>

            <div className={estilos["formRe"]}>
            <label>Foto do Aluno</label>
            <div className={estilos["dzu-dropzone"]}>
              <form>
                <Dropzone />
              </form>
            </div>
            </div>
          </div>
          <div className={estilos["bot-containerRe"]}>
              <button type="button" className={estilos["btn-end1"]}>Finalizar</button>
              <button type="button" className={estilos["btn-add-new1"]}>Adicionar novo</button>
            </div>
        </div>
      </div>
         );
  }
}
