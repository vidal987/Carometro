import React , { Component } from "react";
import './Turma.css'
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { Header } from '../Header/Header.js';
import add from '../img/add.png';

export default function Turma() {
    
    return (
      <div className="nav-container">
      <Header/>
      <div className="homecontainer">
         
        <div className="container-homebtn">
            <div class="grid-container">
              <div class="bloc-1" style={{textAlign: "center", verticalAlign: "middle" }}>
                  <Button style={{alignItems: "center", verticalAlign: "middle" }} disabled><h4>Selecione um curso</h4></Button>{' '}
                  <Button className="btn-turmas" variant="primary">CT Desenvolvimento de Sistemas</Button>{' '}
                  <Button className="btn-turmas" variant="primary">CT Mecânica de Precisão</Button>{' '}
                  <Button className="btn-turmas" variant="primary">CT Qualidade</Button>{' '}
                  <Button className="btn-turmas" variant="primary">CT Redes de Computadores</Button>{' '}
                  <Button className="btn-turmas" variant="primary">Assistente CT de Vendas</Button>{' '}       
              </div>
              <div class="bloc-2" style={{textAlign: "center", verticalAlign: "middle" }}>    
              <FaGraduationCap className="FaGraduationCap" />          
              <h1>Turmas</h1>   
               <div className="CardTurma">
              <span>1DT</span>
               </div>
              <div className="CardTurma">
               <span>2DT</span>
               </div>
               <div className="CardTurma">
               <span>3DT</span>
               </div>
              </div>
            </div>
              <Link to="/"><Button className="btn-back" variant="primary">Voltar</Button>{' '}</Link>         
        </div>       
      </div>
      </div>   
    
    );
 }

