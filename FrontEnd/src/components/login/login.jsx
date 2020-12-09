import React from "react";
import loginImg from "../../senai.png";
import { Link } from 'react-router-dom';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
            <div className="header">Entrar</div>
          </div>
          <div className="form">
            <div className="form-group">
              <input className="login-form" type="text" name="username" placeholder="NI" />
            </div>
            <div className="form-group">
              <input className="login-form" type="password" name="password" placeholder="Senha" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
          <Link to="./Home" style={{ color: '#FFF', textDecoration: 'none' }}>Entrar</Link>
          </button>
        </div>
          <br></br>
          <Link to="/cadastro">Registre-se</Link>
      </div>
    );
  }
}