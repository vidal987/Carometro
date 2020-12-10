import React from "react";
import { Link } from 'react-router-dom';
import "./Ocorrencias.css";

export class NovaOcorrencia extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="ocorrencias-container">
            <div className="left-content">

            <div className="top-container">
                <h1 className="title">Nova ocorrência</h1>
            </div>

            <div className="form">
                <div className="titulo">
                    <label>Título</label>
                    <input type="text" placeholder="Título da ocorrência"></input>
                </div>

                <div className="descricao">
                    <label>Descrição</label>
                    <input type="text" placeholder="Descrição da ocorrência"></input>
                </div>

                <div className="criador">
                    <label>Criador</label>
                    <select>
                        <option>Selecionar</option>
                        <option>Claudia</option>
                        <option>Samira</option>
                    </select>
                </div>

                <div className="data">
                    <label>Data</label>
                    <input type="date"></input>
                </div>

        
            </div>

            <div className="buttons">
                <button className="btn">Salvar</button>
                <button className="btn">Cancelar</button>
            </div>

            </div>
        </div>
      );
    }
}