import React from "react";
import './Curso.css';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import { Formik } from 'formik';

export class Curso extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="nav-container">
          <Header/>
          <div className="homecontainer">            
            <div className="container-homebtn">
            <Formik>
              <form>
                  <div className="form-cturma">
                      <button className="btn-back"><Link to="/Cadastrar"></Link>Voltar</button>
                      <h1 className="page-title">Cadastrar curso</h1><br></br>
                      <label className="span-cturma">Nome do curso</label><br></br>
                      <input type="text" placeholder="Nome do curso" className="input-cturma"></input><br></br>
                      <label className="span-cturma">Períodos</label>
                      <div className="section-checkbox-cadastro">
                          <input type="radio" name="manha"/> 
                          <label className="label-checkbox" for="manha">Manhã</label>
                          <input type="radio" name="tarde"/> 
                          <label className="label-checkbox" for="tarde">Tarde</label>
                          <input type="radio" name="noite"/> 
                          <label className="label-checkbox"for="noite">Noite</label>
                      </div>
                      <div className="btn-section-turma">
                        <button className="btn-turma">Concluir</button>
                        <button className="btn-turma">Cadastrar mais um curso</button>
                      </div>          
                  </div>
              </form>
            </Formik>  
            </div>
          </div>         
        </div>
  
        );
    }
}

