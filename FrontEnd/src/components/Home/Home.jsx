import React from "react";
import { Link } from 'react-router-dom';
import Turmas from "../../Turmas";
import add from "../../img/add.png";
import aluno from "../../img/aluno.png";
import list from "../../img/list.png";
import turma from "../../img/turma.png";

export class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="home-container">
          <div className="container-homebtn">
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={add} className="home-icon" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-home">Cadastrar</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">
                  <img src={list} className="home-icon" />
                  <Link to="/"></Link>
                </button>
                <span className="span-home">Listar</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">
                  <img src={aluno} className="home-icon" />
                  <Link to="/"></Link></button>
                <span className="span-home">Alunos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">
                  <img src={turma} className="home-icon" />
                  <Link to="./Turmas"></Link></button>
                <span className="span-home">Turmas</span>
              </div>
          </div>
        </div>
        );
    }
}
