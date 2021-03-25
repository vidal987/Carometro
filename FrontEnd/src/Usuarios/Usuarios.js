import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import estilos from './Usuarios.module.css';
import '../App.scss';
import edit from "../img/edit.png";
import del from "../img/delete.png";

export class Usuarios extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (

      <div className={estilos["nav-container"]}>
        <Header />
        <div className={estilos["container"]}>
          <div className={estilos["top"]}>
            <h3>Usuários</h3>
            <div className={estilos["div-voltar"]}>
              <Link to="/Home" className={estilos["voltar"]}>Voltar</Link>
            </div>
          </div>
              <table>
                <thead>
                  <tr>
                    <th>NI</th>
                    <th>Nome</th>
                    <th>Acesso</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td data-title="NI">01234567</td>
                  <td data-title="Nome">Claudia Gonçalves Camusso</td>
                  <td data-title="Acesso">Administrador</td>
                  <td>
                    <button className={estilos["editar"]}><img src={edit} /></button>
                    <button className={estilos["excluir"]}><img src={del} /></button>
                  </td>
                </tr>
                <tr>
                  <td data-title="NI">01234567</td>
                  <td data-title="Nome">Claudia Gonçalves Camusso</td>
                  <td data-title="Acesso">Administrador</td>
                  <td>
                    <button className={estilos["editar"]}><img src={edit} /></button>
                    <button className={estilos["excluir"]}><img src={del} /></button>
                  </td>
                </tr>
                <tr>
                  <td data-title="NI">01234567</td>
                  <td data-title="Nome">Claudia Gonçalves Camusso</td>
                  <td data-title="Acesso">Administrador</td>
                  <td>
                    <button className={estilos["editar"]}><img src={edit} /></button>
                    <button className={estilos["excluir"]}><img src={del} /></button>
                  </td>
                </tr>
                <tr>
                  <td data-title="NI">01234567</td>
                  <td data-title="Nome">Claudia Gonçalves Camusso</td>
                  <td data-title="Acesso">Administrador</td>
                  <td>
                    <button className={estilos["editar"]}><img src={edit} /></button>
                    <button className={estilos["excluir"]}><img src={del} /></button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

    );
  }
}