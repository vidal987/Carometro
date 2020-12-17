import React from 'react';
import './Usuario.css';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header.js';

export class Usuario extends React.Component {

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
          <div className="usuario-container">
              <div className="container-homebtn">
                    <div className="form">  
                              <div className="input-block">
                              <button type="button" className="btnback">
                                    <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Voltar</Link></button>
                                <h1>Cadastrar Usuário</h1> 
                                    <label1>Nome completo</label1> 
                                    <input type="text" name="username" placeholder="Nome Completo" />
                                    
                                    <div className="input-block2">
                                    <label2>NI</label2>
                                    <label3>Senha</label3>
                                  <br></br>
                                  <input type="text" name="NI" placeholder="NI" />
                                  <input type="password" name="password" placeholder="Senha" /> 

                                  <div className="acesso">
                                    <h4>Acesso</h4>
                                        <form onChange={this.handleFormChange}>
                                            <label className="label">
                                              <input
                                                className="input"
                                                type="radio"
                                                value="1"
                                                name="name"
                                                style={{ width: 2, height: 16 }}
                                                onChange={this.handleChange}
                                                onClick={this.handleClick}
                                                id="check"
                                              />
                                                Admin
                                                </label>
                                            <label className="label">
                                              <input
                                                className="input"
                                                type="radio"
                                                value="2"
                                                name="name"
                                                style={{ width: 16, height: 16 }}
                                                onChange={this.handleChange}
                                                onClick={this.handleClick}
                                                id="check"
                                              />
                                                Docente
                                                </label>
                                          </form>
                                          <br></br><br></br>
                                          <Dropzone/>
                            <br></br><br></br><br></br>
                            <button type="button" className="btnalunofinalizar">
                            <Link to="./" style={{ color: '#FFF', textDecoration: 'none' }}>Finalizar</Link>
                        </button>
                    <button type="button" className="btnadicionarnovo">
                    <Link to="./Aluno" style={{ color: '#FFF', textDecoration: 'none' }}>Adicionar novo</Link> </button>
                                  </div>
                              </div>
                    </div>
                    </div>    
              </div>
            </div>
      </div>
     
    );
  }
}

Usuario.propTypes = {};

Usuario.defaultProps = {}





