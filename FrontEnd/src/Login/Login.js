import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import LoginHeader from '../LoginHeader';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
          NI: "",
          senha: "",
          message : props.location ? props.location.message : '',
        };
      }
      
    signIn = async (event) => {
        event.preventDefault();
        const data = { NI: this.state.NI, senha: this.state.senha };
        const requestInfo = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
           
            
            const fetchLogin =  fetch('http://localhost:8000/aut/login', requestInfo);
            fetchLogin.then(response => {
                return response.json();
            })
            .then(dados => {
                if (dados.status === 'Falha') {
                    throw new Error(dados.mensagem);
                } else if (dados.auth) {
                    localStorage.setItem("token", dados.token);
                    this.props.history.push("/Home");
                console.log(dados);
            } else {
                throw new Error("Login inválido....");
            }
        })
        .catch(e => {
            this.setState({ message: e.message });
        }); 
    }

    render() {
        return (
            <div className="col-md-6">
                <LoginHeader title="Carômetro" />
                <hr  className="my-3"/>
                {
                    this.state.message !== ''? (
                        <Alert color="danger" className="text-center"> {this.state.message} </Alert>
                    ) : ''
                }
                <Form>
                    <FormGroup>
                        <Label for="NI">NI</Label>
                        <Input type="text" id="email" onChange={e => this.setState({ NI: e.target.value })} placeholder="Informe seu NI" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Senha</Label>
                        <Input type="current-password" id="password" onChange={e => this.setState({ senha: e.target.value })} placeholder="Informe sua senha" />
                    </FormGroup>
                    <Button type="submit" color="primary" block onClick={this.signIn}> Entrar </Button>
                    <Link className="text-link" to="/Aluno">Registre-se</Link>
                </Form>
            </div>
        );
    }
}

export default withRouter(Login);