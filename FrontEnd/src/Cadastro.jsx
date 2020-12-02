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
      <Link to="/turmas">Turmas</Link>
        <div className="content">
            <div className="form">
                <div className="cadastro">
                <h1>Cadastrar usuário</h1> 
                <label>Nome completo</label>
                <br></br>
                  <input type="text" name="username" placeholder="Nome Completo" />
                </div>
                <div className="cadastro">
                <br></br><br></br>
                  <label>NI</label><label1>Senha</label1>
                  <br></br>
                  <input type="text" name="username" placeholder="NI" />
                  <input type="password" name="password" placeholder="Senha" />
                </div>
                <h4>Acesso</h4>
                <div>
                    <input style={{ width: 36, height: 36 }} type="radio" value="Admin" name="admin" /> Admin
                    <input style={{ width: 36, height: 36 }} type="radio" value="docente" name="docente" /> Docente
                </div>
                <Dropzone/>
      </div> 
  </div>
</div>
 );
 }
}
export default Cadastro;