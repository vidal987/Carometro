import React from 'react';
// import aluna from '../img/aluna.jpg';
import './Formandos.css';
import { Header } from '../Header/Header.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Formandos extends React.Component {
    state = {
        aluno: [],
        foto: []
      }
//Mais uma vez tentando pegar dados da API
    componentDidMount() {
        axios.get(`https://localhost:5001/api/Alunos`)
        .then(res => {
            const aluno = res.data; 
            const foto = res.data;           
            this.setState({ 
                aluno, 
                foto 
            });
        })
    }  
    render() {
        return (
            <div className="nav-container">
                <Header/>
            <div class="container-formandos"> 
            <div class="botao-formandos">
            <h1 className="page-titleformandos">Formandos - 3DT/2021/Tarde</h1>
            <button type="button" className="btn-voltarformandos5">Imprimir</button>
            <Link to="./Home" style={{ color: '#FFF', textDecoration: 'none' }}>
            <button type="button" className="btn-voltarformandos6"> Voltar</button></Link>
            </div>


            <ul class="grid-containerformandos">
                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    <li>
                        <Link to="./Ocorrencias" style={{ color: '#FFF', textDecoration: 'none' }}>    
                        <div className="img-containerformandos">
                        <img src={this.state.foto} className="students" />
                        </div>
                       <h6>Aluno</h6>
                       </Link>
                    </li>

                    </ul>
                    </div>
                </div>
          
           
        );
    }
}
