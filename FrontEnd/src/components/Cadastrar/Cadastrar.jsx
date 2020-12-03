import React from "react";
import { Link } from 'react-router-dom';
import add from "../../img/add.png";


export class Cadastrar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="home-container">
          <div className="top-container">
            <h1 className="page-title">Cadastrar</h1>
            <button className="btn-voltar"><Link to="/Home"></Link>Voltar</button>
          </div>
          <div className="container-homebtn">
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={add} className="home-icon" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-home">Alunos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">
                  <img src={add} className="home-icon" />
                  <Link to="/"></Link>
                </button>
                <span className="span-home">Cursos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">
                  <img src={add} className="home-icon" />
                  <Link to="/"></Link></button>
                <span className="span-home">Turmas</span>
              </div>
              <div className="home-buttons">
                 <button className="home-btn">
                  <img src={add} className="home-icon" />
                  <Link to="/Turmas"></Link></button>
                <span className="span-home">Usuários</span>
              </div>
          </div>
        </div>
        );
    }
}

