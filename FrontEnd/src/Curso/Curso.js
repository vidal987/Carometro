import React from "react";
import { Link } from 'react-router-dom';

export class Curso extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="cturma-container">
            <h1 className="page-title">Cadastrar curso</h1>
          <div className="section-input-cturma">
              <div className="form-cturma">
              <label className="span-cturma">Nome do curso</label>
                  <input type="text" placeholder=" Nome do curso" className="input-cturma"></input>
              </div><br></br>
              <span className="span-cturma">Períodos</span>
              <div className="section-checkbox-cadastro">
                  <input type="radio" name="manha"/> 
                  <label className="label-checkbox" for="manha">Manhã</label><br></br>
                  <input type="radio" name="tarde"/> 
                  <label className="label-checkbox" for="tarde">Tarde</label><br></br>
                  <input type="radio" name="noite"/> 
                  <label className="label-checkbox"for="noite">Noite</label>
              </div>
          </div>
          <div className="btn-section-turma">
            <button className="btn-turma">Concluir</button>
            <button className="btn-turma">Cadastrar mais um curso</button>
            <button className="btn-turma"><Link to="/Cadastrar"></Link>Voltar</button>
          </div>
        </div>
        );
    }
}

