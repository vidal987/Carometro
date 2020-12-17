import React from "react";
import './CadastrarTurma.css';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export class CadastrarTurma extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="nav-container">
           <Header/>
         <div className="nav-container">
          <div className="cturma-container">
            <div className="top-container">
              <button className="btnvoltar">
              <Link to="./Options" style={{ color: '#FFF', textDecoration: 'none' }}>Voltar</Link></button>
              <h1>Cadastrar turma</h1>
           
            <div className="section-input-cturma">
                <div className="form-cturma">
                <span className="span-cturma">Nome</span>
                    <input type="text" placeholder="Nome da turma" className="input-cturma"></input>
                </div><br/>
                <div className="form-cturma">
                    <span className="span-cturma">Curso</span>
                    <input type="text" placeholder="Nome do curso" className="input-cturma"></input>
                </div>
            </div>
            <div className="btn-section-turma">
            <button type="button" className="btnalunofinalizar">
                            <Link to="./" style={{ color: '#FFF', textDecoration: 'none' }}>Finalizar</Link>
                        </button>
                    <button type="button" className="btnadicionarnovo">
                    <Link to="./Aluno" style={{ color: '#FFF', textDecoration: 'none' }}>Adicionar novo</Link> </button>
            </div>
          </div>
         </div> 
         </div>
         </div>
        );
    }
}
