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
            <h1>Nova ocorrência</h1>

            <div className="form">
                <label>Título</label>
                <input type="text" placeholder=" Título da ocorrência"></input>

                <label>Descrição</label>
                <input type="text" placeholder=" Descrição da ocorrência"></input>

                <label>Data</label>
                <input type="text" placeholder=" DD/MM/AAAA"></input>

                <label>Criador</label>
                <select>
                    <option> </option>
                    <option>Claudia</option>
                    <option>Samira</option>
                </select>
            </div>

            <div className="buttons">
                <button className="btn">Salvar</button>
                <button className="btn">Cancelar</button>
            </div>
        </div>
      );
    }
}