import React from "react";
import "./App.scss";
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

class Cadastro extends React.Component {
  render() {

    return (
      <div className="base-container" ref={this.props.containerRef}>
      <Link to="/turmas">Turmas</Link>
        <h1>Cadastrar Usuário</h1>
        <div className="content">
            <div className="form">
                <div className="form-group">
                  <input type="text" name="username" placeholder="Nome Completo" />
                </div>
                <div className="form-group">
                  <input type="text" name="username" placeholder="NI" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" placeholder="Senha" />
                </div>
                <h4>Acesso</h4>
                <div>
                    <input style={{ width: 36, height: 36 }} type="radio" value="Admin" name="admin" /> Admin
                    <input style={{ width: 36, height: 36 }} type="radio" value="Professor" name="professor" /> Professor
                </div>
                <Dropzone/>
      </div> 
  </div>
</div>
 );
 }
}
export default Cadastro;