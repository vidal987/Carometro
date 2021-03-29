import React from "react";
import { Link } from 'react-router-dom';
import estilos from './NovaOcorrencia.module.css'
import { Header } from '../Header/Header.js';

// const ModalOcorrencia = ({ setState }) => {

//     const fundoRef = React.useRef();

//     const fecharModal = ({ target }) => {
//         if (target === fundoRef.current) setState(false);
//     }

//     return (
//         <h1>Teste</h1>
//     );
// };

export class NovaOcorrencia extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <div className={estilos.container}>
              <Header/>
        <div className={estilos["ocorrencias-container"]}>
            <div className={estilos["left-content"]}>

            <div className={estilos["top-container"]}>
                <h1 className={estilos.title}>Nova ocorrência</h1>
            </div>

            <div className={estilos.form}>
                <div className={estilos.titulo}>
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
        </div>
      );
    }
}
