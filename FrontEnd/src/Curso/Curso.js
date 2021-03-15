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
            <Formik>
              <form>
                     <div className="form-cturma">
                      <h1 className="page-title3">Cadastrar curso</h1>
                      <Link to="./Cadastrar" style={{ color: '#FFF', textDecoration: 'none' }}>
                                 <button type="button" className="btn-voltar3">
                                 Voltar </button></Link>
                      <label className="span-cturma">Nome do curso</label>
                      <input type="text" placeholder="Nome do curso" className="input-cturma"></input>
                      <label className="span-cturma">Períodos</label>
                      <div className="section-checkbox-cadastro">
                          <input type="radio" name="manha"/> 
                          <label className="label-checkbox" for="manha">Manhã</label>
                          <input type="radio" name="tarde"/> 
                          <label className="label-checkbox" for="tarde">Tarde</label>
                          <input type="radio" name="noite"/> 
                          <label className="label-checkbox"for="noite">Noite</label>
                    
                      </div>        
                  </div>
              </form>
            </Formik>  
            <div className="bot-container4">
                            <Link to="" style={{ color: '#FFF', textDecoration: 'none' }}>
                           <button type="submit" className="btn-concluir">Concluir
                           </button>
                           </Link>

                           <Link to="" style={{ color: '#FFF', textDecoration: 'none' }}>
                           <button type="button" className="btn-cadastrarcurso">Cadastrar mais um curso
                           </button>
                          </Link>
                          </div>
            </div>
          </div>         
     
  
        );
    }
}

