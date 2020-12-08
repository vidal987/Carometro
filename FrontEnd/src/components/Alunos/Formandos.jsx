import React from "react";
import { Link } from 'react-router-dom';
import student from "../../img/student.jpg";


export class Formandos extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="formandos-container">
          <div className="top-container">
            <h1 className="page-title">Formandos</h1>
            <button className="btn-voltar"><Link to="/Home"></Link>Voltar</button>
            <button className="btn-imprimir"><Link to=""></Link>Imprimir</button><br></br>
          </div>
          <div className="formandos-card">
          <h2 className="turma-formandos">Turma E-115-1-2020-1DT/2DT</h2>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="formandos-pic" />
                    <Link to="/"></Link>
                  </button>
                  <span className="span-formandos">Exemplo de Nome Completo do Aluno</span>
              </div>
          </div>
        </div>
        );
    }
}

