import React from "react";
import './Start.css'
import { Button } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { Header } from '../Header/Header.js';
import add from '../img/add.png';

export default class Start extends React.Component {
  render() {
    
    return (
      <div>
       <div className="">
                <Header/>
        <div className="container">
           <Link to="/"><Button className="btn-back">Voltar</Button>{' '}</Link> 
            <div class="box-container">
              <div class="bloc-1">
                  <h2>Selecione um curso</h2>
                  <Button className="btn-turmas">CT Desenvolvimento de Sistemas</Button>{' '}
                  <Button className="btn-turmas">CT Mecânica de Precisão</Button>{' '}
                  <Button className="btn-turmas">CT Qualidade</Button>{' '}
                  <Button className="btn-turmas">CT Redes de Computadores</Button>{' '}
                  <Button className="btn-turmas">Assistente CT de Vendas</Button>{' '}       
              </div>
              <div className="home-buttons">
                <button className="home-btn">
                  <img src={add} className="home-icon" />
                  <Link to="./Cursos"></Link>
                </button>
                <span className="span-home">Cursos</span>
              </div>
              <div className="home-buttons">
                <button className="home-btn">
                  <img src={add} className="home-icon" />
                  <Link to="./Turmas"></Link></button>
                <span className="span-home">Turmas</span>
              </div>
              <div className="home-buttons">
                 <button className="home-btn">
                  <img src={add} className="home-icon" />
                  <Link to="./Usuários"></Link></button>
                <span className="span-home">Usuários</span>
              </div>
          </div>
        </div>
        </div>
      </div>   
    
    );
 }
}
