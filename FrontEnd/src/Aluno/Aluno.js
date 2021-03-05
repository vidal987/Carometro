import React from 'react';
import './Aluno.css';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header.js';

export class Aluno extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = e => {
    const target = e.currentTarget;

    if (
      target.checked &&
      this.state[`${target.name}-${target.value}`] === target.checked
    ) {
      target.checked = false;
      target.click();
    }
  };

  handleChange = e => {
    const target = e.target;

    if (this.state[`${target.name}-${target.value}`] !== target.checked) {
      this.setState({
        [`${target.name}-${target.value}`]: target.checked
      });
    }
  };

  handleFormChange = e => {
    console.log("Field::", e.target, e.target.checked, e.type);
  };

  render() {
    return (
      
      <div className="nav-container">
        <Header/>
          <div className="home-aluno">
                    <div className="form">  
                                <button type="button" className="btn-voltar">
                                <Link to="./" style={{ color: '#FFF', textDecoration: 'none' }}>Voltar</Link>
                                </button>

                                <h1>Cadastrar usuário</h1>
                            
                                  <div className="input-block">
                                  <div className="grupo-formnome">
                                  <label>Nome completo</label>
                                  <input type="text" name="username" placeholder="Nome Completo" />
                                 
                                  </div>
                                  <div className="grupo-form">
                                  <label>NI</label>
                                  <input type="text" name="NI" placeholder="NI" />
                                  </div>
                                  <div className="grupo-form">
                                  <label>Senha</label>
                                  <input type="password" name="password" placeholder="Senha" /> 
                                  </div>      

                                  <div className="acesso">
                                    <h3>Acesso</h3>
                                            <label className="label"> 
                                              <input
                                                type="radio"
                                                value="1"
                                                name="name"
                                                style={{ width: 16, height: 16 }}
                                                onChange={this.handleChange}
                                                onClick={this.handleClick}
                                                id="check"
                                              />
                                                <h6>Admin</h6>
                                                </label>
                                            <label className="label">
                                              <input
                                                type="radio"
                                                value="2"
                                                name="name"
                                                style={{ width: 16, height: 16 }}
                                                onChange={this.handleChange}
                                                onClick={this.handleClick}
                                                id="check"
                                              />
                                                
                                                <h6>Docente</h6>
                                                </label>
                                                
                                  </div>
                              </div>
                              <form onChange={this.handleFormChange}>
                                  {/* Dropzone */}
                                  <Dropzone/>
                            </form>
                            <div className="btn-bottom"></div>
                                <button type="button" className="btn3">
                                    <Link to="./" style={{ color: '#FFF', textDecoration: 'none' }}>Finalizar</Link>
                                </button>
                            <button type="button" className="btn4">
                            <Link to="./Aluno" style={{ color: '#FFF', textDecoration: 'none' }}>Adicionar novo</Link> </button>
                        </div>
                    </div>
            </div>
     
    );
  }
}

Aluno.propTypes = {};

Aluno.defaultProps = {}





