import React from "react";
import { Link } from 'react-router-dom';
import estilos from './NovaOcorrencia.module.css'
import { Header } from '../Header/Header.js';

export class NovaOcorrencia extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav-container">
                <Header />
                <div className={estilos.container}>

                    <div className={estilos["top-container"]}>
                        <h4 className={estilos.title}>Nova ocorrência</h4>
                        <div className={estilos.divVoltar}>
                            <Link to="/Ocorrencias" className={estilos.btnVoltar}>Voltar</Link>
                        </div>
                    </div>
                    <div className={estilos.formGroup2}>
                        <label>Título</label>
                        <input className={estilos.input2} type="text" placeholder="Digite um título..."></input>
                    </div>
                    <div className={estilos.formGroup2}>
                        <label>Descrição</label>
                        <input className={estilos.input3} type="text" placeholder="Digite uma descrição..."></input>
                    </div>
                    <div className={estilos.formGroup3}>
                        <label>Data</label>
                        <input className={estilos.inputData} type="date" placeholder="Digite um título..."></input>
                    </div>
                    <div className={estilos.formGroup3}>
                        <label>Turma</label>
                        <select className={estilos.selectUser} >
                            <option value="">Claudia</option>
                            <option value="">Samira</option>
                        </select>
                    </div>
                    <div className={estilos.btnBottom}>
                        <button className={estilos.btnSalvar}>Salvar</button>
                    </div>

                </div>
            </div>
        );
    }
}
