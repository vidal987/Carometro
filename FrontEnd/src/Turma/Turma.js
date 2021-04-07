import React  from "react";
import './Turma.css'
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { Header } from '../Header/Header.js';
import add from '../img/add.png';
import axios from 'axios';

export default class Turma extends React.Component{
      state = {
        erro: null,
        loading: null,
        dados: null,
        turmas: null  

      }

      definirTurmas = (id_curso) => {
        const curso  = this.state.dados.find((curso) => curso.id === id_curso)

        if (curso) this.setState({ turmas: curso.turmas });
      }
 
      componentDidMount() {
        const buscarLista = async () => {
            try {
                this.setState({ erro: null, dados: null, loading: true });

                const res = await fetch('http://localhost:8000/api/cursos', {
                    method: "GET",
                    headers: {
                      "x-access-token": window.localStorage.getItem("token") || ""
                    }
                });

                const json = await res.json();

                if (res.status !== 200) throw new Error(json.mensagem);

                this.setState({ dados: json });
                this.definirTurmas(json[0].id);
            } catch ({ message }) {
                this.setState({ erro: message, dados: null });
            } finally {
                this.setState({ loading: false });
            }
        };

        buscarLista();
    }


    render() {
      return (
        <div className="nav-container">
        <Header/>
        <div className="homecontainer">
      
          <h3 className="page-title4">Selecione um Curso</h3>
          <Link to="./Home" style={{ color: '#FFF', textDecoration: 'none' }}>
          <button type="button" className="btn-voltar4">
            Voltar </button></Link>
              <div className="grid-container">

                <div className="bloc-1" style={{textAlign: "center", verticalAlign: "middle" }}>
                         {this.state.dados && this.state.dados.map(({nome, id})=> (
                           <Button key={`curso_${id}`} className="btn-turmas" onClick={() => this.definirTurmas(id)}>
                             {nome}
                            </Button>
                         )) }
                </div>

                <div className="bloco-2" style={{textAlign: "center", verticalAlign: "middle" }}>    
                  <FaGraduationCap className="FaGraduationCap" />

                  <h4>Turmas</h4>

                  { this.state.turmas && this.state.turmas.map(({ id, nome }) => (
                    <div key={`turma_${id}`} className="CardTurma"> 
                      <Link to={`/Turma/${id}`}>{nome}</Link>
                    </div>
                  ))}
                </div>
              </div>
          </div>       
        </div>
      );
   }
}

