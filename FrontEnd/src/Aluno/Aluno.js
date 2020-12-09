import React from 'react';
import '../App.scss';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { Link } from 'react-router-dom';

//Atenção!! Era o componente Cadatro.jsx
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
      <div className="containercadastro">
        <button type="button" className="btn2">
            <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Voltar</Link></button>
        <div className="content">
            <div className="form">
                <div className="cadastro">
                    <h1>Cadastrar usuário</h1> 
                        <label>Nome completo</label>                
                        <input type="text" name="username" placeholder="Nome Completo" />
                        <label>NI</label>
                        <input type="text" name="NI" placeholder="NI" />      
                        <label1>Senha</label1>
                        <input type="password" name="password" placeholder="Senha" />          
                </div>
                <div className="acesso">
                    <h3>Acesso</h3>
                    <form onChange={this.handleFormChange}>
                      <label className="label">
                        <input 
                        type="radio" 
                        value="1" 
                        name="name" 
                        style={{ width: 16, height: 16 }}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        id="checkAdmin"   
                        />
                      Admin
                      </label>
                      <label className="label">
                        <input 
                        type="radio" 
                        value="2" 
                        name="name" 
                        style={{ width: 16, height: 16 }}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        id="checkTeacher" 
                        /> 
                      Docente
                      </label>
                    </form>
                </div>

                <Dropzone/>
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



