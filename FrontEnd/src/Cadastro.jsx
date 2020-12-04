import React from "react";
import "./App.scss";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

class Cadastro extends React.Component {
  render() {

    return (
      <div className="containercadastro" ref={this.props.containerRef}>
        <button type="button" className="btn2">
            <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Voltar</Link></button>
        <div className="content">
            <div className="form">
                <div className="cadastro">
                <h1>Cadastrar usuário</h1> 
                <label>Nome completo</label>
                <br></br>
                  <input className="login-form" type="text" name="username" placeholder=" Nome completo" />
                </div>
                <div className="cadastro">
                <br></br><br></br>
                  <label>NI</label><label1>Senha</label1>
                  <br></br>
                  <input className="login-form" type="text" name="username" placeholder="NI" />
                  <input className="login-form" type="password" name="password" placeholder="Senha" />
                </div>
                <div className="acesso">
                <h3>Acesso</h3>
                    <input type="radio" value="Admin" name="admin" /> Admin
                    <input type="radio" value="docente" name="docente" /> Docente
                </div>
                <Dropzone/>
                <button type="button" className="btn3">
            <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Finalizar</Link>
            </button>
            <button type="button" className="btn4">
            <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Adicionar novo</Link> </button>
      </div> 
  </div>
</div>
 );
 }
}
export default Cadastro;