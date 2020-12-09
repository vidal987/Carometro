import { Input } from "@material-ui/core";
import React from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";

export class Start extends React.Component {
  render() {
    
    return (
      <div>
        <div className="containerTurmas">
           <Link to="/"><Button className="btn-back" variant="primary">Voltar</Button>{' '}</Link> 
            <div class="box-container">
              <div class="bloc-1">
                  <h2>Selecione um curso</h2>
                  <Button className="btn-turmas" variant="primary">CT Desenvolvimento de Sistemas</Button>{' '}
                  <Button className="btn-turmas" variant="primary">CT Mecânica de Precisão</Button>{' '}
                  <Button className="btn-turmas" variant="primary">CT Qualidade</Button>{' '}
                  <Button className="btn-turmas" variant="primary">CT Redes de Computadores</Button>{' '}
                  <Button className="btn-turmas" variant="primary">Assistente CT de Vendas</Button>{' '}       
              </div>
              <div class="bloc-2">            
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
        </div>
      </div>
    
    );
 }
}
